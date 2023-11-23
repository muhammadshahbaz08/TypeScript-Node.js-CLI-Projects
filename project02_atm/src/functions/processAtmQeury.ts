import inquirer from "inquirer";
import { User } from "../interface/interface.js";

import { atmOperations } from "./handleAtmTransactions/atmOperations.js";

export const processAtmQeury = async (users: User[]) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "Enter PIN CODE :",
    name: "pin",
  });

  const user = users.find((val) => val.pin === res.pin);

  if (user) {
    console.log(`Welcome ${user.name}`);
    atmOperations(user); //passing the user Data to atm Operation Module.
    return;
  } else {
    console.log(`Invalid PIN CODE..`);
  }
};
