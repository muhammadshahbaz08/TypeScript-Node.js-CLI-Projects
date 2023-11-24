#! /usr/bin/env node

import { createUser } from "./functions/createUser.js";
import { processAtmQeury } from "./functions/processAtmQeury.js";

const main = () => {
  const users = createUser();
  //To see the , Created User Detail's, e.g Balance Uncomment following line
  // console.log(users);
  const response = processAtmQeury(users);
};

main();
