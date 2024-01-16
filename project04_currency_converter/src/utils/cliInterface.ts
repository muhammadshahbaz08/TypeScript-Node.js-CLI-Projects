import inquirer from "inquirer";
import chalk from "chalk";
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
};
