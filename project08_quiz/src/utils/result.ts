import chalk from "chalk";
import ora from "ora";
import Table from "cli-table3";

export const result = async (score: number, wrongAns: number) => {
  // Promise-based delay function for Spinner's
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  //Spinner For Animations
  const spinner = ora({
    text: chalk.hex("#F43F5E")("Hold On , Compiling Result's"),
    spinner: "fistBump",
  }).start();

  await delay(3000);

  spinner.succeed(chalk.rgb(34, 197, 94)("Result Compiled"));

  //table..for Result's
  let table = new Table({
    head: [
      chalk.rgb(220, 38, 38)("Sr. #"),
      chalk.rgb(220, 38, 38)("TOTAL No. of Questions"),
      chalk.rgb(220, 38, 38)("Correct Answers "),
      chalk.rgb(220, 38, 38)("Wrong Answers"),
    ],
    colWidths: [10, 40, 20, 30],
    colAligns: ["center", "center", "center", "center"],
  });

  //Pushing Count data in table
  table.push(["1", 5, score, wrongAns]);

  /// Display the table
  console.log(`\n${table.toString()}\n`);
};
