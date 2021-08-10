import { writeFile } from 'fs/promises';

import { flatten } from 'lodash';

import { IConfig } from '../types/config';

import { generateFromRosMsg } from './generateFromRosMsg';
import { getMsgFilesData } from './readMsgFiles';

export const rosTypescriptGenerator = async (config: IConfig) => {
  const files = flatten(
    await Promise.all(
      config.input.map((dir) => getMsgFilesData(dir.path, dir.namespace))
    )
  );
  const joinedMessages = files
    .map((file) =>
      [`MSG: ${file.namespace}/${file.name}`, file.data].join('\n')
    )
    .join('\n===\n');

  const typescriptInterfaces = generateFromRosMsg(
    joinedMessages,
    config.typePrefix
  );

  await writeFile(config.output, typescriptInterfaces);

  return typescriptInterfaces;
};
