import inquirer from "inquirer";
import chalk from "chalk";
import { createSpinner, Spinner } from "nanospinner";
import { User } from "../interface/interface.js";
import { atmOperations } from "./handleAtmTransactions/atmOperations.js";

export const processAtmQeury = async (users: User[]) => {
  let attempts = 3;
  while (attempts) {
    //Intro Line
    console.log(`
  ${chalk.green.bold("Project 02: ATM CLI \n")} 
  ${chalk.bgMagentaBright.bold(
    "1. Enter a PIN CODE Ranges from 2001 to 2010. \n"
  )}
  ${chalk.bgMagentaBright.bold("2.Use Exit Option to come out from CLI \n")}
  ${chalk.bgMagentaBright.bold(
    "3. You Can Only Enter an INVALID PIN 3 Times after that Program Exit's. \n"
  )}
  `);

    const res = await inquirer.prompt({
      type: "number",
      message: `Enter PIN CODE (In Case of Invalid PIN, You Have attempts Left ${attempts}) : `,
      name: "pin",
    });

    //Pin Validation
    const user = users.find((val) => val.pin === res.pin);
    const spinner: Spinner = createSpinner("Authenticating").start();

    if (user) {
      setTimeout(() => {
        spinner.success({ text: chalk.green("Authentication Successful") });
        console.log(chalk.rgb(255, 148, 140)(`Welcome ${user.name}`));
        atmOperations(user); //passing the user Data to atm Operation Module.
      }, 1000);
      return;
    } else {
      attempts--;
      if (attempts > 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        spinner.error({ text: chalk.red.bold("Authentication Failed\n") });

        console.log(
          chalk.red.bold.bgWhite(
            `Invalid PIN CODE. You have ${attempts} attempts left.`
          )
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        spinner.error({ text: chalk.red.bold("Authentication Failed\n") });
        console.log(
          chalk.white.bgRed.bold(
            "YOU'VE EXCEEDED YOUR LIMIT FOR INVALID PIN. Exiting ATM."
          )
        );
      }
    }
  }
};
