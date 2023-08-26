import { writeFile } from 'fs/promises';

import { flatten } from 'lodash';

import { IConfig } from '../types/config';

import { generateFromRosMsg } from './generateFromRosMsg';
import { getMsgFilesData } from './readMsgFiles';
import { join } from 'path';

import { tmpdir } from 'os';
const fs = require('fs');
const { promisify } = require('util');
const mkdtemp = promisify(fs.mkdtemp);

export const rosTypescriptGenerator = async (config: IConfig) => {
  // TMP dir vor generated msg files from action and srv files
  const tempDir = await mkdtemp(join(tmpdir(), 'ros-typescript-generattor-'));
  console.log('Temporary directory created:', tempDir);

  const files = flatten(
    await Promise.all(
      config.input.map((dir) => getMsgFilesData(dir.path, dir.namespace, tempDir))
    )
  );
  const joinedMessages = files
    .map((file) =>
      [`MSG: ${file.namespace}/${file.name}`, file.data].join('\n')
    )
    .join('\n===\n');

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
