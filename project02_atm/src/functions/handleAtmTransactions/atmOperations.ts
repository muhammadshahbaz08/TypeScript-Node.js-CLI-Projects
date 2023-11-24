import inquirer from "inquirer";
import chalk from "chalk";
import { User } from "../../interface/interface.js";
import { WithDrawCash } from "./withDrawCash.js";
import { balanceInquiry } from "./balanceInquiry.js";

export const atmOperations = async (user: User) => {
  let continueTransaction = true;
  while (continueTransaction) {
    const res = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Choose the Following Operations :",
      choices: ["WithDraw", "BalanceInquiry", "exit"],
    });

    if (res.select === "WithDraw") {
      await WithDrawCash(user);
    } else if (res.select === "BalanceInquiry") {
      await balanceInquiry(user);
    } else if (res.select === "exit") {
      console.log(chalk.bgGreen.black.bold("Thanks For Using ATM"));
      continueTransaction = false;
    }
  }
};
