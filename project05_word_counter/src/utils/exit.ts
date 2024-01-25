import inquirer from "inquirer";
import chalk from "chalk";
export const end = async (exit: boolean) => {
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
    exit = true;
  } else {
    console.log(
      chalk.hex("#ff78a1")(`
      ----------------------------------------------------------
      `)
    );
  }
};
