import { createUser } from "./functions/createUser.js";
import { processAtmQeury } from "./functions/processAtmQeury.js";

const main = () => {
  const users = createUser();
  console.log(users);
  const response = processAtmQeury(users);
};

main();
