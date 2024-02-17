export class Player {
  name: string;
  health: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  healthDecrease() {
    let health = this.health - 25;
    this.health = health;
  }
  healthIncrease() {
    this.health = 100;
  }
}

export class Opponent {
  name: string;
  health: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  healthDecrease() {
    let health = this.health - 25;
    this.health = health;
  }
}
