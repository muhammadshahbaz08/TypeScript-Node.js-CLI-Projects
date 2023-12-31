import inquirer from "inquirer";
import chalk from "chalk";

import { Todo } from "../utils/todoType.js";
import { addTodo } from "./todoOperations/addTodo.js";
import { viewTodo } from "./todoOperations/viewTodo.js";
import { removeTodo } from "./todoOperations/removeTodo.js";
import { editTodo } from "./todoOperations/editTodo.js";
import { end } from "./todoOperations/end.js";

//Declaring an Array of Object of Type "Todo Interface"..
let todos: Todo[] = [
  {
    task: "Buy groceries",
    dueDate: "2024-01-01",
    status: "incomplete",
  },
  {
    task: "Finish project",
    dueDate: "2024-01-15",
    status: "inprogress",
  },
];

export const cliInterface = async () => {
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 03: TODO CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  //variable for cotrolling Loop
  let exit = false;
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
    }
    if (userSelect.operation === "View TODO") {
      await viewTodo(todos);
    }
    if (userSelect.operation === "Edit TODO") {
      await editTodo(todos);
    }
    if (userSelect.operation === "Remove TODO") {
      await removeTodo(todos);
    }
    if (userSelect.operation === "Exit") {
      await end();
      exit = true;
    }
  } while (!exit);
};
