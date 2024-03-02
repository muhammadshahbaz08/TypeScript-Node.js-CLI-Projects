export class Person {
  private personality: string;

  constructor() {
    this.personality = "Mystery";
  }

  askQuestion = (ans: number) => {
    if (ans === 1) {
      this.personality = "Extrovert";
    } else if (ans === 2) {
      this.personality = "Introvert";
    } else {
      this.personality = "Mystery";
    }
  };

  getPersonlaity = (): string => {
    return this.personality;
  };
}
