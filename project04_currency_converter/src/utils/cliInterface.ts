import inquirer from "inquirer";
import chalk from "chalk";
import Table from "cli-table3";

import ora from "ora";

import { apiService } from "../services/apiService.js";

export const cliInterface = async () => {
  //for contolling loop of CLI For More Transaction's,
  let exit = false;

  // Promise-based delay function for Spinner's
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 04: Currency Converter CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  do {
    // spinner1 before Data Fetching ,
    const spinner1 = ora({
      text: "Hold On , While Fetching Data",
      spinner: "fistBump",
    }).start();

    await delay(4000);

    spinner1.succeed(chalk.greenBright("Data Fetched"));

    //fetching Data For Countries...
    let data = await apiService();

    //Getting Name's Of Countries from API Data.
    let countries = Object.keys(data);

    //Base Country Selection
    let firstCountry = await inquirer.prompt({
      type: "list",
      name: "name",
      message: "Converting From :",
      choices: countries,
    });

    // Convert Country Selection
    let secondCountry = await inquirer.prompt({
      type: "list",
      name: "name",
      message: "Converting To :",
      choices: countries,
    });

    //Add The Amount for Conversion
    let amountToConvert = await inquirer.prompt({
      type: "input",
      name: "amount",
      message: `Please Enter Amount in ${chalk.hex("#34D399")(
        firstCountry.name
      )} :`,
      validate: (value) => {
        let isValid = !isNaN(parseFloat(value));
        return isValid || "Please Enter a Number :";
      },
    });

    //Conversion Rate URL
    let cnvURL = `https://v6.exchangerate-api.com/v6/3c85c0bd193a7a0f863e07fb/pair/${firstCountry.name}/${secondCountry.name}`;

    // Start the spinner2, Before Fetching Data For Conversion Data.
    const spinner2 = ora("Loading Data").start();

    //Fetching Data for Conversion
    let cnvData = async (data: any) => {
      let cnvInfo = await fetch(data);
      let res = await cnvInfo.json();
      return res.conversion_rate;
    };
    //Delaying Spinner2
    await delay(4000);

    spinner2.succeed(chalk.greenBright("Data Loaded"));

    //Fetching Data For Conversion Data
    let conversionRate = await cnvData(cnvURL);
    let convertRate = amountToConvert.amount * conversionRate;

    //Summary Dispaly Using Table Library ...

    // Create a new table with headers
    let table = new Table({
      head: [
        chalk.rgb(252, 165, 165).bold("From"),
        chalk.rgb(252, 165, 165)("To"),
        chalk.rgb(252, 165, 165)("Amount"),
        chalk.rgb(252, 165, 165)("Converted Amount"),
      ],
      colWidths: [20, 20, 20, 20],
      colAligns: ["center", "center", "center", "center"],
    });

    // Add a row with the conversion data
    table.push([
      firstCountry.name,
      secondCountry.name,
      amountToConvert.amount,
      convertRate,
    ]);

    // Log the table to the console
    console.log(table.toString());

    //Exit or Run the Program Again
    let runCli = await inquirer.prompt({
      type: "confirm",
      name: "run",
      message: "Do You Want to Do Another Currency Convert?",
      default: false,
    });
    if (!runCli.run) {
      // console.log(chalk.red.bold(`Thank's For Using, Exiting the CLI`));
      console.log(
        chalk.red.bold(`       
              Thank's For Using, Exiting the CLI
               `)
      );
      exit = true;
    } else {
      console.log(
        chalk.hex("#ff78a1")(`
        ----------------------------------------------------------
        `)
      );
    }
  } while (!exit);
};
