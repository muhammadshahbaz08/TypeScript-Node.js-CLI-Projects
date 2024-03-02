import inquirer from "inquirer";
import chalk from "chalk";
export const endCli = async (): Promise<boolean> => {
  let runCli = await inquirer.prompt({
    type: "confirm",
    name: "run",
    message: "Do You Want to use CLI Again ?",
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
      ************************************************
      `)
    );
    return false;
  }
};
