import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import { apiService } from "../services/apiService.js";
import { resQuizType } from "../services/apiService.js";
import { quiz } from "./quiz.js";

export const cliInterface = async () => {
  // Promise-based delay function for Spinner's
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 08: Quiz Cli"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  let { name } = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter Your Name :",
  });

  let difficulty = await inquirer.prompt({
    type: "list",
    name: "level",
    message: "Choose  Difficult Level",
    choices: ["Easy", "Medium", "Hard"],
  });

  //Spinner For Animations
  const spinner = ora({
    text: chalk.hex("#F43F5E")("Please Wait, While we Prepare the Quiz."),
    spinner: "dots2",
  }).start();

  await delay(3000);

  spinner.succeed(chalk.rgb(34, 197, 94)("QUIZ PREPARED "));

  //making difficulty Value to Lower Case Due to API Requirment's..
  //calling apiService
  let data: resQuizType = await apiService(difficulty.level.toLowerCase());

  //passing Data to Quiz Module ...
  console.log(`\t`);
  await quiz(data);
};
