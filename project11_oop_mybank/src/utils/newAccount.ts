import inquirer from "inquirer";
import { Account } from "../classes/account.js";
export const newAccount = async () => {
  const res = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Your Name :",
    },
    {
      type: "number",
      name: "age",
      message: "Enter Your Age :",
      validate: (input) => {
        if (input > 18) {
          return true;
        }
        return "Age must be greater than 18.";
      },
    },
    {
      type: "input",
      name: "phoneNumber",
      message: "Enter Your Phone Number : ",
      validate: (input) => {
        // Generic phone number regex pattern
        const phoneNumberRegex = /^\s*\+?([0-9][\s-]*){9,}$/;
        if (phoneNumberRegex.test(input)) {
          return true;
        }
        return "Please enter a valid phone number.";
      },
    },
    {
      type: "input",
      name: "userID",
      message: "Create a User ID  :",
    },
    {
      type: "number",
      name: "pin",
      message: "Create a PIN CODE :",
      validate: (input) => {
        if (input >= 1000 && input <= 9999) {
          return true;
        }
        return "PIN should be a 4-digit number.";
      },
    },
  ]);

  // assigning account details ,via making an object of account class
  res.account = new Account();

  console.log(`\n\t---------------------------------------\n`);
  //spinner's will come
  // User Created...
  //now push the data to array...
  return res;
};
