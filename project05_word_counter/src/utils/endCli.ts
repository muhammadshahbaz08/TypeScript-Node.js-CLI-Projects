import inquirer from "inquirer";
import chalk from "chalk";
export const endCli = async (): Promise<boolean> => {
  //for Some Margin
  console.log(`\n`);

  let runCli = await inquirer.prompt({
    type: "confirm",
    name: "run",
    message: "Do You Want to Do Another Word Count ?",
    default: false,
  });
  if (!runCli.run) {
    console.log(
      chalk.red.bold(`       
            Thank's For Using, Exiting the CLI
             `)
    );
    return true;
  } else {
    console.log(
      chalk.hex("#ff78a1")(`
      ----------------------------------------------------------
      `)
    );
    return false;
  }
};
