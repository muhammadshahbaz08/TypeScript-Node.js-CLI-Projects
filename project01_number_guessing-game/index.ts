#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// round & score tracker's
let round = 1;
let score = 0;

const main = async () => {
  //Intro & Instructions for the CLI Usage
  console.log(`
    ${chalk.bgMagentaBright.bold("Project 01: NUMBER GUESSING GAME.")}
    ${chalk.bgMagentaBright.italic(
      "1. You Need to Choose a Number between 0 & 1 to Guess the correct One."
    )}
    ${chalk.bgMagentaBright.italic("2. You Have 5 Round's to Play.")}
    `);

  // loop for runing multiple Round's
  for (round = 1; round <= 5; round++) {
    if (round === 1) {
      console.log(chalk.bgGreenBright.bold(`\n GAME START ! `));
    }

    console.log(
      chalk.bgCyan.bold(`\nRound : ${round} Starts | Score : ${score}`)
    );

    const response = await inquirer.prompt({
      name: "input",
      type: "list",
      message: "Select a Number from 0 to 5:",
      choices: ["0", "1"],
    });

    //multiply the random genrater number to 2 , to get our desirer number's (0, 1) generated every time..
    let gen_Number = Math.floor(Math.random() * 2);

    if (parseInt(response.input) === gen_Number) {
      console.log(chalk.bgGreen(`Great , You'r Answer is Correct.`));

      score += 1;
    } else {
      console.log(chalk.bgRed(` Sorry! You'r Answer is Wrong.`));
    }
  } //loop end's

  if (round >= 5) {
    console.log(
      chalk.bgGreenBright.bold(`\n GAME ENDS !  TOTAL Score = ${score}. \n`)
    );
  }
};

//making a loop for user if he wants to play the game Multiple Time's
let confirm;
do {
  await main();
  confirm = await inquirer.prompt({
    type: "confirm",
    message: "Do you want to Play Again?",
    name: "res",
  });
} while (confirm.res);
