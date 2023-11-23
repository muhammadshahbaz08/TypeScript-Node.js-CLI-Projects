import inquirer from "inquirer";
import { User } from "../../interface/interface.js";

export const WithDrawCash = async (user: User) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "Enter Amount to With Draw :",
    name: "amountToWithDraw",
  });

  if (res.amountToWithDraw > user.balance) {
    console.log("Sorry , You Entered Amount Exceeds Your Account Balance !");
  }
  if (res.amountToWithDraw < user.balance) {
    console.log(`WithDrawl Amount : ${res.amountToWithDraw} `);
    console.log(`Balance : ${user.balance - res.amountToWithDraw}`);
  }
};
