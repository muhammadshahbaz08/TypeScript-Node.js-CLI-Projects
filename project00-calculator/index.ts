#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//importing modules for Operation
import add from "./add.js";
import subtraction from "./subtract.js";
import division from "./divide.js";
import product from "./product.js";

const main = async () => {
  //Heading
  console.log(`${chalk.greenBright("Project-00:")} ${chalk.red("CALCULATOR")}`);

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

//making a loop for multiple time if user want to use it..
let confirm;
do {
  await main();
  confirm = await inquirer.prompt({
    type: "confirm",
    name: "res",
    message: "Do You Want to Use the Calculator Again?",
  });
} while (confirm.res);
