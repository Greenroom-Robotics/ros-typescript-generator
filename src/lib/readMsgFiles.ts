import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { basename } from "path";

/* eslint-disable functional/prefer-readonly-type,functional/no-let,functional/no-loop-statement,functional/immutable-data */

export const getMsgFiles = async (dir: string): Promise<string[]> => {
  let output: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      output = output.concat(await getMsgFiles(join(dir, entry.name)));
    } else if (entry.isFile() && entry.name.endsWith(".msg")) {
      output.push(join(dir, entry.name));
    }
  }
  return output;
}
/* eslint-enable functional/prefer-readonly-type,functional/no-let,functional/no-loop-statement,functional/immutable-data */

export const getMsgFilesData = async (dir: string, namespace: string) => {
  const filePaths = await getMsgFiles(dir)
  return Promise.all(filePaths.map(async(filePath) => ({
    path: filePath,
    data: await readFile(filePath, { encoding: "utf-8"}),
    namespace,
    name: basename(filePath, ".msg")
  })))
}