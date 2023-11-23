// import inquirer from "inquirer";
import { User } from "../../interface/interface.js";

export const balanceInquiry = (user: User) => {
  console.log(`Available Balance: ${user.balance} `);
};
