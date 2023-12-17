import inquirer from "inquirer";
import chalk from "chalk";

import { Todo } from "../utils/todoType.js";

//Declaring an Array of Object of Type "Todo Interface"..
let todos: Todo[] = [];

export const cliInterface = async () => {
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#f06060")(
      "Project 03: TODO CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  //Getting User Response For Operation
  let userSelect = await inquirer.prompt({
    type: "list",
    message: "Select an Operation",
    name: "operation",
    choices: ["Add TODO", "View TODO", "Edit TODO", "Remove TODO", "Exit"],
  });
};
