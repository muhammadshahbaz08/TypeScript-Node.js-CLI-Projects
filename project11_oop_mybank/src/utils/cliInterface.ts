import chalk from "chalk";
import inquirer from "inquirer";

import { Customer } from "../classes/customer.js";
import { Account } from "../classes/account.js";
import { signIn } from "./signIn.js";
import { newAccount } from "./newAccount.js";
import { endCli } from "./endCli.js";

//for storing customer's Data
let customers: Customer[] = [
  {
    name: "ali",
    age: 19,
    phoneNumber: "+923150420054",
    userID: "ali11",
    pin: 4444,
    account: new Account(),
  },
];
// Promise-based delay function for Spinner's
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const cliInterface = async () => {
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 11: My Bank CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );
  let exit = false;
  while (!exit) {
    const { res } = await inquirer.prompt({
      type: "list",
      name: "res",
      message: "What do you like to do ?",
      choices: ["Sign In", "Create New Account", "Exit"],
    });

    if (res === "Sign In") {
      await signIn(customers);
    } else if (res === "Create New Account") {
      // geeting newCreated User Data
      let newUser: Customer = await newAccount();
      //Adding New User Data to Customer array...
      customers.push(newUser);
    } else if (res === "Exit") {
      ////End CLI Module
      exit = await endCli();
    }
  }
};
