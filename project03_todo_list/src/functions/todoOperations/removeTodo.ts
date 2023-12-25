import inquirer from "inquirer";
import { Todo } from "../../utils/todoType.js";
import chalk from "chalk";
export const removeTodo = async (arr: Todo[]) => {
  const res = await inquirer.prompt({
    type: "input",
    name: "removeID",
    message: "Enter The Task ID to Remove from the List :",
    validate: (value) => {
      const valid = !isNaN(Number(value));
      return valid || `Please Enter a Number`;
    },
  });

  const indexToRemoved = res.removeID - 1;
  if (indexToRemoved >= 0 && indexToRemoved < arr.length) {
    arr.splice(indexToRemoved, 1);
    console.log(
      chalk.cyanBright.bold(
        `REMOVED ${chalk.red.italic(`TodoID:${res.removeID}`)} From Todo List`
      )
    );
  } else {
    console.log(chalk.greenBright(`Invalid Todo ID `));
  }
};
