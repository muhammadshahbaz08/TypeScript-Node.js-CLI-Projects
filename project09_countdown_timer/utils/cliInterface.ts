import chalk from "chalk";
import inquirer from "inquirer";
import Table from "cli-table3";
import { endCli } from "./endCli.js";

export const cliInterface = async () => {
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 09: CountDown Timer CLI"
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  let exit = false;
  do {
    const { minutes, seconds } = await inquirer.prompt([
      {
        type: "number",
        name: "minutes",
        message: "Enter the countdown duration (minutes):",
      },
      {
        type: "number",
        name: "seconds",
        message: "Enter the countdown duration (seconds):",
      },
    ]);

    const endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + minutes);
    endTime.setSeconds(endTime.getSeconds() + seconds);
    //the await new Promise((resolve) => {...})  will pause the execution of the do-while loop until the Promise is resolved, which happens when the countdown ends.
    await new Promise<void>((resolve) => {
      const timerInterval = setInterval(() => {
        const currentTime = new Date();
        const remainingTime =
          (endTime.getTime() - currentTime.getTime()) / 1000;

        if (remainingTime <= 0) {
          clearInterval(timerInterval);
          console.log(chalk.red.bold("\n\tCountdown ended!\n"));
          console.log(
            chalk.whiteBright(
              `=======================================================\n`
            )
          );
          resolve();
        } else {
          console.clear();

          const remMinutes = Math.floor(remainingTime / 60);
          const remSeconds = Math.floor(remainingTime % 60);

          const table = new Table({
            head: [
              chalk.rgb(245, 158, 11)("Minutes Left  "),
              chalk.rgb(245, 158, 11)("Second's Left"),
            ],
            colWidths: [40, 40],
            colAligns: ["center", "center"],
          });

          table.push([`${remMinutes} minutes`, `${remSeconds} seconds`]);

          console.log(table.toString());
        }
      }, 1000);
    });

    exit = await endCli();
  } while (!exit);
};
