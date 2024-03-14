import chalk from "chalk";
import { Customer } from "../../classes/customer.js";

export const balanceInquiry = async (customer: Customer) => {
  console.log(
    chalk.bgGreenBright.white.bold(
      `\n\t Available Balance :${customer.account.balance}\n`
    )
  );
};
