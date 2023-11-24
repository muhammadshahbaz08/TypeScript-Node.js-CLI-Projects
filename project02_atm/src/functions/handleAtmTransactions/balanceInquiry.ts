import { User } from "../../interface/interface.js";
import chalk from "chalk";
export const balanceInquiry = (user: User) => {
  console.log(chalk.greenBright.bold(`Available Balance: ${user.balance} `));
};
