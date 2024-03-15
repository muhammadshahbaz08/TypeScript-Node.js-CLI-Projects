import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";
//delay module for spinner's animation
import { delay } from "./cliInterface.js";
import { Customer } from "../classes/customer.js";
import { customerServiceMenu } from "./customerServices/customerServiceMenu.js";

export const signIn = async (customers: Customer[]) => {
  const res = await inquirer.prompt([
    {
      type: "input",
      name: "userID",
      message: "Enter User ID  :",
    },
    {
      type: "number",
      name: "pin",
      message: "Enter PIN CODE :",
    },
  ]);

  //Spinner For Animations
  const spinner = ora({
    text: chalk.hex("#F43F5E")("Please, Wait We are Authorizing Credentials."),
    spinner: "dots2",
  }).start();

  await delay(3000);

  //authorizing customer ....from customer's array
  let customer = customers.find((val) => {
    return res.userID === val.userID && res.pin === val.pin;
  });

  if (customer) {
    spinner.succeed(chalk.rgb(34, 197, 94)("User Verified"));
    // If Customer is Autorized...it display Menu
    await customerServiceMenu(customer);
  } else if (!customer) {
    spinner.fail(chalk.rgb(255, 0, 0)(` User Not Verified`));
    console.log(
      chalk.hex("#ff78a1")(`
      ************************************************
      `)
    );
  }
};
