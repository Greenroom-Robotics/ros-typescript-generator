import { flatten } from "lodash"

import { IConfigDirectory } from "../types/config";

import { generateFromRosMsg } from "./generateFromRosMsg"
import { getMsgFilesData } from "./readMsgFiles"


/**
 * Takes in an array of directories and generates typescript interfaces for them.
 * Returns these interfaces as a string
 */
export const readAndGenerate = async (
  directories: readonly IConfigDirectory[],
): Promise<string> => {
  const files = flatten(await Promise.all(directories.map(dir => getMsgFilesData(dir.path, dir.namespace))))
  const concattedMessages = files.map(file => [
    `MSG: ${file.namespace}/${file.name}`,
    file.data
  ].join('\n')).join("\n===\n")

  const typescriptInterfaces = generateFromRosMsg(concattedMessages)

  return typescriptInterfaces
}