import inquirer from "inquirer";

//importing modules for Operation
import add from "./add.js";
import subtraction from "./subtract.js";
import division from "./divide.js";
import product from "./product.js";
import chalk from "chalk";

const main = async () => {
  //using inquirer library here to get Input from user.
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "num1",
      message: "Enter Number 1 :",
    },
    {
      type: "input",
      name: "num2",
      message: "Enter Number 2 :",
    },
    {
      type: "list",
      name: "operator",
      message: "Choose the Operator:",
      choices: [
        { name: "Addition", value: add },
        { name: "Subtraction", value: subtraction },
        { name: "Multiply", value: product },
        { name: "Division", value: division },
      ],
    },
  ]);

  //passing arguments to function & displaying the result in output
  console.log(chalk.bgGreen(input.operator(input.num1, input.num2)));
};

main();
