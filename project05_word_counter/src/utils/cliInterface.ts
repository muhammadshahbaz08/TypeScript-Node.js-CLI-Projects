import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";

import { end } from "./exit.js";
import { tableDisplay } from "./table.js";

export const cliInterface = async () => {
  //for Multiple Time Usage of CLI
  let exit = false;

  // Promise-based delay function for Spinner's
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 05: Word Counter CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  do {
    //Getting Input ..
    const res = await inquirer.prompt({
      type: "input",
      name: "text",
      message: "Enter Text :",
    });

    // Counts only Alphabets (a-z & A-Z)
    const alphabeticCount = (res.text.match(/[a-zA-Z]/g) || []).length;

    // Counts words without whitespaces
    const wordCount = (res.text.match(/\b\S+\b/g) || []).length;

    //Counts Special Chracters (e.g, &, *, $, [], _, +  e.tc. )
    const specialCharacterCount = (res.text.match(/[^a-zA-Z0-9\s]/g) || [])
      .length;

    //Counts Numbers
    const numericCount = (res.text.match(/[0-9]/g) || []).length;

    //Spinner For Animations
    const spinner = ora({
      text: chalk.hex("#F43F5E")("Hold On , Processing Data"),
      spinner: "fistBump",
    }).start();

    await delay(3000);

    spinner.succeed(chalk.rgb(34, 197, 94)("Data Processed"));

    //Call Table Display Module
    await tableDisplay(
      alphabeticCount,
      wordCount,
      specialCharacterCount,
      numericCount
    );

    //Call End CLI Module
    await end(exit);
  } while (!exit);
};
