import { Person } from "./person.js";
export class Student extends Person {
  private name: string;
  constructor() {
    //constructor for derived classes contain super();
    super();
    this.name = "";
  }
  get Name(): string {
    return this.name;
  }
  set Name(name: string) {
    this.name = name;
  }
}
