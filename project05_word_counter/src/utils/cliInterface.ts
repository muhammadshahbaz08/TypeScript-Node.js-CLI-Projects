import inquirer from "inquirer";
import chalk from "chalk";
import { end } from "./exit.js";
import { tableDisplay } from "./table.js";

export const cliInterface = async () => {
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 05: Word Counter CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  //for Multiple Time Usage of CLI
  let exit = false;

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

    //Call's Table Module
    await tableDisplay(
      alphabeticCount,
      wordCount,
      specialCharacterCount,
      numericCount
    );

    //Exit or Run the Program Again
    await end(exit);
  } while (!exit);
};
