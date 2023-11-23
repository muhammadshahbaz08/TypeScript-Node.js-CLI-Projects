import inquirer from "inquirer";
import { User } from "../../interface/interface.js";

import { WithDrawCash } from "./withDrawCash.js";
import { balanceInquiry } from "./balanceInquiry.js";

export const atmOperations = async (user: User) => {
  const res = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Choose the Following Operations :",
    choices: ["WithDraw", "BalanceInquiry", "exit"],
  });

  if (res.select === "WithDraw") {
    WithDrawCash(user);
  }
  if (res.select === "BalanceInquiry") {
    balanceInquiry(user);
  }
  if (res.select === "exit") {
    console.log(`Thanks For Using ATM`);
  }
};
