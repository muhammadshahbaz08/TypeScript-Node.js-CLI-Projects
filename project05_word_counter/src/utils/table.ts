import Table from "cli-table3";
import chalk from "chalk";

export const tableDisplay = async (
  alphabeticCount: number,
  wordCount: number,
  specialCharacterCount: number,
  numericCount: number
) => {
  //Create a Table To Display Count's
  let table = new Table({
    head: [
      chalk.rgb(220, 38, 38)("Sr. #"),
      chalk.rgb(220, 38, 38)("Description"),
      chalk.rgb(220, 38, 38)("Count"),
    ],
    colWidths: [10, 40, 20],
    colAligns: ["center", "center", "center"],
  });

  //Pushing Count data in table
  table.push(
    ["1", "Alphabet's Count", alphabeticCount],
    ["2", "Word's Count", wordCount],
    ["3", "Special Charachter's Count", specialCharacterCount],
    ["4", "Numbers Count", numericCount]
  );

  /// Display the table
  console.log(table.toString());
};
