import { writeFile } from 'fs/promises';

import { flatten } from 'lodash';

import { IConfig } from '../types/config';

import { generateFromRosMsg } from './generateFromRosMsg';
import { getMsgFilesData } from './readMsgFiles';

const disambiguatePkgOfPropertyTypes = (joinedMessages: string) => {
  // this is a workaround for https://github.com/foxglove/rosmsg/issues/39
  let lines = joinedMessages.split("\n");
  let re_new_msg = /^MSG: (.*)\/.*$/;
  let re_field = /^([a-zA-Z0-9\[\]]+) ([a-zA-Z0-9]+).*/
  let pkg = undefined;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let match = re_new_msg.exec(line);
    if (match) {
      pkg = match[1];
    } else {
      let match = re_field.exec(line);
      if (match && match[1] !== "Header" && match[1][0] === match[1][0].toUpperCase()) {
        lines[i] = `${pkg}/${lines[i]}`;
      }
    }
  }
  return lines.join("\n");
}

export const rosTypescriptGenerator = async (config: IConfig) => {
  const files = flatten(
    await Promise.all(
      config.input.map((dir) => getMsgFilesData(dir.path, dir.namespace))
    )
  );
  let joinedMessages = files
    .map((file) =>
      [`MSG: ${file.namespace}/${file.name}`, file.data].join('\n')
    )
    .join('\n===\n');

  joinedMessages = disambiguatePkgOfPropertyTypes(joinedMessages);

  const typescriptInterfaces = generateFromRosMsg(
    joinedMessages,
    config.typePrefix,
    config.rosVersion
  );

  const typescriptInterfacesWithNote = [
    `/* eslint-disable */`,
    `// These files were generated using "ros-typescript-generator"`,
    typescriptInterfaces,
  ].join('\n');

  await writeFile(config.output, typescriptInterfacesWithNote);

  return typescriptInterfaces;
};
