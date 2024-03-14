import inquirer from "inquirer";
import chalk from "chalk";
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
      console.log(
        chalk.red.bold(`       
              LogOut
               `)
      );
      continueTransaction = false;
    }
  }
};
