export class Account {
  accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  balance: number;

  constructor() {
    this.balance = 0;
  }
}
