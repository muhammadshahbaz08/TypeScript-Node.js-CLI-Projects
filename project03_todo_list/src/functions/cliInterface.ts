import inquirer from "inquirer";
import chalk from "chalk";

import { Todo } from "../utils/todoType.js";
import { addTodo } from "./todoOperations/addTodo.js";
import { viewTodo } from "./todoOperations/viewTodo.js";

//Declaring an Array of Object of Type "Todo Interface"..
let todos: Todo[] = [];

export const cliInterface = async () => {
  let exit = false;
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 03: TODO CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );
  do {
    //Getting User Response For Operation
    let userSelect = await inquirer.prompt({
      type: "list",
      message: "Select an Operation",
      name: "operation",
      choices: ["Add TODO", "View TODO", "Edit TODO", "Remove TODO", "Exit"],
    });

    if (userSelect.operation === "Add TODO") {
      await addTodo(todos);
      await console.log(`------------------------------------`);
    }
    if (userSelect.operation === "View TODO") {
      await viewTodo(todos);
      await console.log(`------------------------------------`);
    }
    if (userSelect.operation === "Exit") {
      exit = true;
    }
  } while (!exit);
};
