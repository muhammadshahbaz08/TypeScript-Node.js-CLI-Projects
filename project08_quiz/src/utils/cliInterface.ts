import inquirer from "inquirer";
import chalk from "chalk";
import { apiService } from "../services/apiService.js";
import { resQuizType } from "../services/apiService.js";
import { quiz } from "./quiz.js";

export const cliInterface = async () => {
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

  //making difficulty Value to Lower Case Due to API Requirment's..
  //calling apiService
  let data: resQuizType = await apiService(difficulty.level.toLowerCase());

  //passing Data to Quiz Module ...
  await quiz(data);
};