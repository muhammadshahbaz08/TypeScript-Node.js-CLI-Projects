import inquirer from "inquirer";
import chalk from "chalk";
import { User } from "../interface/interface.js";
import { atmOperations } from "./handleAtmTransactions/atmOperations.js";

export const processAtmQeury = async (users: User[]) => {
  // Intro Line
  console.log(`
  ${chalk.bgGreen.black.bold("Project 02: ATM CLI \n")} 
  ${chalk.bgMagentaBright.bold(
    "1. Enter a PIN CODE Ranges from 2001 to 2010. \n"
  )}
  ${chalk.bgMagentaBright.bold("2.Use Exit Option to come out from CLI \n")}`);

  const res = await inquirer.prompt({
    type: "number",
    message: "Enter PIN CODE :",
    name: "pin",
  });
  //Pin Validation
  const user = users.find((val) => val.pin === res.pin);
  if (user) {
    console.log(chalk.bgYellow.greenBright.bold(`Welcome ${user.name}`));
    atmOperations(user); //passing the user Data to atm Operation Module.
    return;
  } else {
    console.log(chalk.red.bold(`Invalid PIN CODE..`));
  }
};
