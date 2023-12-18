import { Todo } from "../../utils/todoType.js";
import inquirer from "inquirer";

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
      validate: (value) =>
        !isNaN(Date.parse(value)) || "Please enter a valid date",
      filter: (value) => new Date(value),
    },
    {
      type: "list",
      name: "status",
      message: "Select Task Status :",
      choices: ["incomplete", "completed", "inprogress"],
    },
  ]);

  arr.push(res);
  console.log(`------------------------------------`);
};
