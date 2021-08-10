import chalk from 'chalk';
import inquirer from "inquirer";

inquirer
  .prompt([
    "What "
  ])
  .then((answers: any) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((err: Error) => {
    console.error(`
    ${chalk.red(err.message)}
  `);
    process.exit(1);
  });