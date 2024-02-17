import chalk from "chalk";
import inquirer from "inquirer";
import { Player, Opponent } from "./classes.js";

export const gameControls = async (o1: Opponent, p1: Player) => {
  let ask = await inquirer.prompt({
    type: "list",
    name: "opt",
    message: "Choose an Option:",
    choices: ["Fight", "Drink Health Portion", "Run for Your Life.."],
  });
  if (ask.opt === "Fight") {
    let num = Math.floor(Math.random() * 2);
    if (num > 0) {
      p1.healthDecrease();
      console.log(
        `\n\t${chalk.bold.bgRed(o1.name)} ${chalk.bgRed.bold(
          `Attacked You, Your Health Decreases\n`
        )}`
      );
      console.log(`\t${chalk.bold.green(p1.name)} Health is ${p1.health}`);
      console.log(`\t${chalk.bold.red(o1.name)} Health is ${o1.health} \n`);
      if (p1.health <= 0) {
        console.log(
          `${chalk.red.italic.bold(
            `*******You Loose Better Luck Next Time*********\n`
          )}`
        );
        process.exit();
      }
    }
    if (num <= 0) {
      o1.healthDecrease();
      console.log(
        `\n\t${chalk.bgGreen(`You Attacked`)} ${chalk.bold.bgRed(
          o1.name
        )} ${chalk.bgRed.bgGreen(`His Health Decreases\n`)}`
      );
      console.log(`\t${chalk.bold.green(p1.name)} health = ${p1.health}`);
      console.log(`\t${chalk.bold.red(o1.name)} health  = ${o1.health} \n`);
      if (o1.health <= 0) {
        console.log(
          `${chalk.red.greenBright.bgWhite(
            `************You WON!**************`
          )}\n`
        );
        process.exit();
      }
    }
  }
  if (ask.opt === "Drink Health Portion") {
    p1.healthIncrease();
    console.log(
      `${chalk.bold.italic.green(
        `You Drink, Health Portion Your health is ${p1.health} `
      )}`
    );
  }
  if (ask.opt === "Run for Your Life..") {
    console.log(chalk.red.bold.italic(`You Loose! Better Luck Next Time`));
    process.exit();
  }
};
