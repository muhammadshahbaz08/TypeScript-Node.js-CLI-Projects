import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

import { User } from "../interface/interface.js";

export const createUser = () => {
  const users: User[] = [];
  //Using Loop For Dynamically Creating Users as many as by controlling the for loop condition.
  for (let i = 1; i <= 10; i++) {
    let user: User = {
      id: i,
      pin: 2000 + i,
      name: faker.person.fullName(),
      accountNumber: Number(faker.finance.accountNumber(12)),
      balance: Math.floor(100000 * Math.random() * i),
    };
    users.push(user);
  }

  return users;
};
