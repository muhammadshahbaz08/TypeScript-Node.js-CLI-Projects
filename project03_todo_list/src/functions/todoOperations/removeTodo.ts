import inquirer from "inquirer";
import { Todo } from "../../utils/todoType.js";
import chalk from "chalk";
export const removeTodo = async (arr: Todo[]) => {
  const res = await inquirer.prompt({
    type: "list",
    name: "task",
    message: "Select the Task to Remove :",
    choices: arr.map((item, index) => ({ name: item.task, value: index })),
  });

  console.log(chalk.red.bold(`TASK REMOVED .`));
  arr.splice(res.task, 1);
  console.log(`--------------------------------`);
};
// console.log(chalk.greenBright(`Invalid Todo ID `));
