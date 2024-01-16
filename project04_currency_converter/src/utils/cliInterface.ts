import inquirer from "inquirer";
import chalk from "chalk";
import Table from "cli-table3";

import { apiService } from "../services/apiService.js";

export const cliInterface = async () => {
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 04: Currency Converter CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

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
    message: `Please Enter Amount in ${firstCountry.name} :`,
    validate: (value) => {
      let isValid = !isNaN(parseFloat(value));
      return isValid || "Please Enter a Number :";
    },
  });

  //Conversion Rate URL
  let cnvURL = `https://v6.exchangerate-api.com/v6/3c85c0bd193a7a0f863e07fb/pair/${firstCountry.name}/${secondCountry.name}`;

  //Fetching Data for Conversion
  let cnvData = async (data: any) => {
    let cnvInfo = await fetch(data);
    let res = await cnvInfo.json();
    return res.conversion_rate;
  };

  let conversionRate = await cnvData(cnvURL);
  let convertRate = amountToConvert.amount * conversionRate;

  //Summary Dispaly Using Table Library ...

  // Create a new table with headers
  let table = new Table({
    // head: ["From", "To", "Amount", "Converted Amount"],
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
};
