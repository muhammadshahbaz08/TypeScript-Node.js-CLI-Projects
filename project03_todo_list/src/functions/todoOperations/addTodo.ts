import inquirer from "inquirer";
import dayjs from "dayjs";
import chalk from "chalk";

import { Todo } from "../../utils/todoType.js";

export const addTodo = async (arr: Todo[]) => {
  const res = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: "Enter your Task : ",
    },
    {
      type: "input",
      name: "dueDate",
      message: "Enter the due date (YYYY-MM-DD):",
      validate: (value) => {
        const isValidate = dayjs(value, "YYYY-MM-DD").isValid();
        return isValidate || "Please Enter a Valid Date";
      },
      filter: (value) => dayjs(value).format("YYYY-MM-DD"),
    },
    {
      type: "list",
      name: "status",
      message: "Select Task Status :",
      choices: ["incomplete", "completed", "inprogress"],
    },
  ]);

  arr.push(res);
  console.log(
    chalk.green(`
    ----------------------------------------------------------
    `)
  );
};
