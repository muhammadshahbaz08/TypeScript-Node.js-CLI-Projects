import chalk from "chalk";
import { Customer } from "../../classes/customer.js";
import inquirer from "inquirer";
export const credit = async (customer: Customer) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "Enter Amount to Credit in Your Account :",
    name: "amountToCredit",
    validate: (input) => {
      if (input > 0) {
        return true;
      }
      return "\t\nPlease Enter Amount Greater than 0";
    },
  });
  //Adding Credited Amount to Balance
  customer.account.balance = customer.account.balance + res.amountToCredit;
  console.log(
    chalk.green.bold(`\n\tAmount Credited Successfully in your Account.\n`)
  );
};
