import inquirer from "inquirer";
import chalk from "chalk";
import { Player, Opponent } from "./classes.js";
import { gameControls } from "./gameControls.js";

export const cliInterface = async () => {
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 07: Adventure Game CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: `Enter your Name:`,
  });

  let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent ",
    choices: ["Skeleton", "Assasin", "Zombie"],
  });

  //intializing the object ..
  let p1 = new Player(player.name);
  let o1 = new Player(opponent.select);

  console.log(
    `\t\n*************${chalk.bold.green(p1.name)} VS ${chalk.bold.red(
      o1.name
    )}**************\t\n`
  );

  //loop
  do {
    //Skeleton
    if (opponent.select === "Skeleton") {
      await gameControls(o1, p1);
    }

    //Assassin
    if (opponent.select === "Assasin") {
      await gameControls(o1, p1);
    }

    //Zombie
    if (opponent.select === "Zombie") {
      await gameControls(o1, p1);
    }
  } while (true);
};
