import { Dirent } from 'fs';
import { readdir, readFile, realpath, stat, writeFile } from 'fs/promises';
import { basename, join } from 'path';

/* eslint-disable functional/prefer-readonly-type,functional/no-let,functional/no-loop-statement,functional/immutable-data */

export const generateMsgsFromSrvFiles = async (
  inputFilePath: string,
  tmpDir: string
): Promise<string[]> => {
  try {
    const srvName = basename(inputFilePath, '.srv');
    const output: string[] = [];

    // Read the content of the input file
    const fileContent = await readFile(inputFilePath, 'utf-8');

    // Split the content into two parts based on the '---' line
    const [request, response] = fileContent.split('---', 2);

    // Check if a part is empty or consists only of lines starting with #
    const isRequestValid =
      !request ||
      !request.trim() ||
      request
        .trim()
        .split('\n')
        .every((line) => line.trim().startsWith('#'));
    const isResponseValid =
      !response ||
      !response.trim() ||
      response
        .trim()
        .split('\n')
        .every((line) => line.trim().startsWith('#'));

    // Write the two parts into separate output files
    if (!isRequestValid) {
      const requestMsgFile = join(tmpDir, srvName + '_Request.msg');
      await writeFile(requestMsgFile, request, 'utf-8');
      output.push(requestMsgFile);
    }

    if (!isResponseValid) {
      const responseMsgFile = join(tmpDir, srvName + '_Response.msg');
      await writeFile(responseMsgFile, response, 'utf-8');
      output.push(responseMsgFile);
    }

    return output;
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
};

export const generateMsgsFromActionsFiles = async (
  inputFilePath: string,
  tmpDir: string
): Promise<string[]> => {
  try {
    const srvName = basename(inputFilePath, '.action');
    const output: string[] = [];

    // Read the content of the input file
    const fileContent = await readFile(inputFilePath, 'utf-8');

    // Split the content into two parts based on the '---' line
    const [goal, result, feedback] = fileContent.split('---', 3);

    // Check if a part is empty or consists only of lines starting with #
    const isGoalEmptyOrCommentOnly =
      !goal.trim() ||
      goal
        .trim()
        .split('\n')
        .every((line) => line.trim().startsWith('#'));
    const isResultEmptyOrCommentOnly =
      !result.trim() ||
      result
        .trim()
        .split('\n')
        .every((line) => line.trim().startsWith('#'));
    const isFeedbackEmptyOrCommentOnly =
      !feedback.trim() ||
      feedback
        .trim()
        .split('\n')
        .every((line) => line.trim().startsWith('#'));

    if (!isGoalEmptyOrCommentOnly) {
      const goalMsgFile = join(tmpDir, srvName + '_ActionGoal.msg');
      await writeFile(goalMsgFile, goal, 'utf-8');
      output.push(goalMsgFile);
    }

    if (!isResultEmptyOrCommentOnly) {
      const resultMsgFile = join(tmpDir, srvName + '_ActionResult.msg');
      await writeFile(resultMsgFile, result, 'utf-8');
      output.push(resultMsgFile);
    }

    if (!isFeedbackEmptyOrCommentOnly) {
      const feedbackMsgFile = join(tmpDir, srvName + '_ActionFeedback.msg');
      await writeFile(feedbackMsgFile, feedback, 'utf-8');
      output.push(feedbackMsgFile);
    }

    return output;
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
};

async function processEntries(entries: Dirent[], dir: string) {
  const processedEntries = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);

      if (entry.isSymbolicLink()) {
        const resolvedPath = await realpath(fullPath);
        const stats = await stat(resolvedPath);
        return {
          ...entry,
          isDirectory: () => stats.isDirectory(),
          isFile: () => stats.isFile(),
        };
      } else {
        return entry;
      }
    })
  );

  return processedEntries;
}

export const getMsgFiles = async (
  dir: string,
  tmpDir: string
): Promise<string[]> => {
  let output: string[] = [];

  const entries = await readdir(dir, { withFileTypes: true });
  const processedEntries = await processEntries(entries, dir);

  for (const entry of processedEntries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      output = output.concat(await getMsgFiles(fullPath, tmpDir));
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.msg')) {
        output.push(fullPath);
      } else if (entry.name.endsWith('.srv')) {
        const srvFiles = await generateMsgsFromSrvFiles(fullPath, tmpDir);
        output.push(...srvFiles);
      } else if (entry.name.endsWith('.action')) {
        const actionFiles = await generateMsgsFromActionsFiles(
          fullPath,
          tmpDir
        );
        output.push(...actionFiles);
      }
    }
  }
  return output;
};
/* eslint-enable functional/prefer-readonly-type,functional/no-let,functional/no-loop-statement,functional/immutable-data */

export const getMsgFilesData = async (
  dir: string,
  namespace: string,
  tmpDir: string
) => {
  const filePaths = await getMsgFiles(dir, tmpDir);
  return Promise.all(
    filePaths.map(async (filePath) => ({
      path: filePath,
      data: await readFile(filePath, { encoding: 'utf-8' }),
      namespace,
      name: basename(filePath, '.msg'),
    }))
  );
};
