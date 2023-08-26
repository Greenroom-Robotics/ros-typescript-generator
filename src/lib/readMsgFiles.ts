import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { basename } from 'path';


/* eslint-disable functional/prefer-readonly-type,functional/no-let,functional/no-loop-statement,functional/immutable-data */

export const srvFile = async (inputFilePath: string, tmpDir: string): Promise<string[]> => {
  try {

    let srvName = basename(inputFilePath, ".srv");
    let output: string[] = [];

    // Read the content of the input file
    const fileContent = await readFile(inputFilePath, 'utf-8');

    // Split the content into two parts based on the '---' line
    const [request, response] = fileContent.split('---', 2);

    // Check if a part is empty or consists only of lines starting with #
    const isRequestValid = !request || !request.trim() || request.trim().split('\n').every(line => line.trim().startsWith('#'));
    const isResponseValid = !response || !response.trim() || response.trim().split('\n').every(line => line.trim().startsWith('#'));


    // Write the two parts into separate output files
    if (!isRequestValid) {
      const requestMsgFile = join(tmpDir, srvName + "Request.msg");
      await writeFile(requestMsgFile, request, 'utf-8');
      output = [...output, requestMsgFile];
    }

    if (!isResponseValid) {
      const responseMsgFile = join(tmpDir, srvName + "Response.msg");
      await writeFile(responseMsgFile, response, 'utf-8');
      output = [...output, responseMsgFile];
    }

    return output;
  } catch (error) {
    console.error('An error occurred:', error.message);
    return [];
  }
}


export const actionFile = async (inputFilePath: string, tmpDir: string): Promise<string[]> => {
  try {
    console.log("Found action: " + inputFilePath);
    let srvName = basename(inputFilePath, ".action");
    let output: string[] = [];

    // Read the content of the input file
    const fileContent = await readFile(inputFilePath, 'utf-8');

    // Split the content into two parts based on the '---' line
    const [goal, result, feedback] = fileContent.split('---', 3);

    console.log("Goal: " + goal);
    console.log("result: " + result);
    console.log("feedback: " + feedback);

    // Check if a part is empty or consists only of lines starting with #
    const isGoalEmptyOrCommentOnly = !goal.trim() || goal.trim().split('\n').every(line => line.trim().startsWith('#'));
    const isResultEmptyOrCommentOnly = !result.trim() || result.trim().split('\n').every(line => line.trim().startsWith('#'));
    const isFeedbackEmptyOrCommentOnly = !feedback.trim() || feedback.trim().split('\n').every(line => line.trim().startsWith('#'));

    if (!isGoalEmptyOrCommentOnly) {
      const goalMsgFile = join(tmpDir, srvName + "ActionGoal.msg");
      console.log(goalMsgFile);
      await writeFile(goalMsgFile, goal, 'utf-8');
      output = [...output, goalMsgFile];
    }

    if (!isResultEmptyOrCommentOnly) {
      const resultMsgFile = join(tmpDir, srvName + "ActionResult.msg");
      console.log(resultMsgFile);
      await writeFile(resultMsgFile, result, 'utf-8');
      output = [...output, resultMsgFile];
    }

    if (!isFeedbackEmptyOrCommentOnly) {
      const feedbackMsgFile = join(tmpDir, srvName + "ActionFeedback.msg");
      console.log(feedbackMsgFile);
      await writeFile(feedbackMsgFile, feedback, 'utf-8');
      output = [...output, feedbackMsgFile];
    }

    return output;
  } catch (error) {
    console.error('An error occurred:', error.message);
    return [];
  }
}


export const getMsgFiles = async (dir: string, tmpDir: string): Promise<string[]> => {
  console.log("Check DIR: " + dir);
  let output: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      output = output.concat(await getMsgFiles(join(dir, entry.name), tmpDir));
    } else if (entry.isFile() && entry.name.endsWith('.msg')) {
      output.push(join(dir, entry.name));
    } else if (entry.isFile() && entry.name.endsWith('.srv')) {
      let srcFiles = await srvFile(dir + "/" + entry.name, tmpDir);
      output = [...output, ...srcFiles];
    } else if (entry.isFile() && entry.name.endsWith('.action')) {
      let srcFiles = await actionFile(dir + "/" + entry.name, tmpDir);
      output = [...output, ...srcFiles];
    }
  }
  return output;
};
/* eslint-enable functional/prefer-readonly-type,functional/no-let,functional/no-loop-statement,functional/immutable-data */

export const getMsgFilesData = async (dir: string, namespace: string, tmpDir: string) => {
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
