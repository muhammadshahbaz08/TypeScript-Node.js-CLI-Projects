import inquirer from "inquirer";
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

  //authorizing customer ....from customer's array
  let customer = customers.find((val) => {
    return res.userID === val.userID && res.pin === val.pin;
  });

  if (customer) {
    // If Customer is Autorized...it display Menu
    await customerServiceMenu(customer);
  } else if (!customer) {
    console.log(`\tInvalid UserID & Password!\n`);
  }
};
