import chalk from "chalk";
import inquirer from "inquirer";
import { Customer } from "../../classes/customer.js";

export const debit = async (customer: Customer) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "Enter Amount to Debit From Your Account :",
    name: "amountToWithDraw",
  });

  if (res.amountToWithDraw > customer.account.balance) {
    console.log(
      chalk.red.bold(
        "\n\tSorry , You Entered Amount Exceeds Your Account Balance !\n"
      )
    );
  } else if (res.amountToWithDraw <= customer.account.balance) {
    //Subtracting Debited Amount from Balance
    customer.account.balance = customer.account.balance - res.amountToWithDraw;
    console.log(
      chalk.red.bold(`\n\tAmount Debited Successfully from Your Account\n`)
    );
  }
};
