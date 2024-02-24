import chalk from "chalk";
import inquirer from "inquirer";
import Table from "cli-table3";

export const cliInterface = async () => {
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

  const timerInterval = setInterval(() => {
    const currentTime = new Date();
    const remainingTime = (endTime.getTime() - currentTime.getTime()) / 1000; // Time difference in seconds

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      console.log(chalk.red.bold("Countdown ended!"));
    } else {
      console.clear(); // Clear console to update time

      const remMinutes = Math.floor(remainingTime / 60);
      const remSeconds = Math.floor(remainingTime % 60);

      // Create a new table instance
      const table = new Table({
        head: [
          chalk.rgb(245, 158, 11)("Minutes Left  "),
          chalk.rgb(245, 158, 11)("Second's Left"),
        ],
        colWidths: [40, 40],
        colAligns: ["center", "center"],
      });

      // Add rows to the table
      table.push([`${remMinutes} minutes`, `${remSeconds} seconds`]);

      // Print the table to the console
      console.log(table.toString());
    }
  }, 1000);
};
