import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
//delay module for spinner's animation
import { delay } from "../cliInterface.js";
import { Customer } from "../../classes/customer.js";
import { debit } from "./debit.js";
import { credit } from "./credit.js";
import { balanceInquiry } from "./balanceInquiry.js";

export const customerServiceMenu = async (customer: Customer) => {
  console.log(
    `\n\t Dear ${chalk.underline.bold(
      customer.name.toUpperCase()
    )} Welcome to Bank \n`
  );

  let continueTransaction = true;
  while (continueTransaction) {
    const res = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Choose the Following Operations :",
      choices: ["Debit", "Credit", "BalanceInquiry", "LogOut"],
    });

    if (res.select === "Debit") {
      await debit(customer);
    } else if (res.select === "Credit") {
      await credit(customer);
    } else if (res.select === "BalanceInquiry") {
      await balanceInquiry(customer);
    } else if (res.select === "LogOut") {
      // Spinner For Animations
      const spinner = ora({
        text: chalk.hex("#F43F5E")("Logging out, please wait..."),
        spinner: "dots2",
      }).start();

      await delay(3000);
      spinner.succeed(chalk.hex("#E11D48").bold("Logged Out Successfully\n"));

      continueTransaction = false;
    }
  }
};
