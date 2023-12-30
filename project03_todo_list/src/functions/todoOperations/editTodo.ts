import inquirer from "inquirer";
import dayjs from "dayjs";

import { Todo } from "../../utils/todoType.js";

export const editTodo = async (arr: Todo[]) => {
  const res = await inquirer.prompt({
    type: "list",
    name: "selectedTask",
    choices: arr.map((item, index) => ({ name: item.task, value: index })),
  });

  const updatedTask = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: "Enter your Updated Task : ",
    },
    {
      type: "input",
      name: "dueDate",
      message: "Enter the Updated due date (YYYY-MM-DD):",
      validate: (value) => {
        const isValidate = dayjs(value, "YYYY-MM-DD").isValid();
        return isValidate || "Please Enter a Valid Date";
      },
      filter: (value) => dayjs(value).format("YYYY-MM-DD"),
    },
    {
      type: "list",
      name: "status",
      message: "Select Latest / Updated Status of Task:",
      choices: ["incomplete", "completed", "inprogress"],
    },
  ]);

  arr[res.selectedTask] = updatedTask;
  console.log(`--------------------------------`);
};
