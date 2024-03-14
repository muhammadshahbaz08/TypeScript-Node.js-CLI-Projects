import { Account } from "./account.js";

export class Customer {
  name: string;
  age: number;
  phoneNumber: string;
  pin: number;
  userID: string;
  account: Account;

  constructor(
    name: string,
    age: number,
    phoneNumber: string,
    pin: number,
    userID: string
  ) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.pin = pin;
    this.userID = userID;
    this.account = new Account();
  }
}
