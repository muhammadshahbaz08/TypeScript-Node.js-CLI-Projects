import inquirer from "inquirer";
import chalk from "chalk";

import { Student } from "../classes/student.js";

export const cliInterface = async () => {
  //Intro Line
  console.log(
    `\n         ${chalk.bold.bgWhite.hex("#a62133")(
      "Project 10: OOP "
    )}  ${chalk.hex("#c395ed").italic("By Muhammad Shahbaz\n")}`
  );

  const { name }: { name: string } = await inquirer.prompt({
    name: "name",
    message: `Enter Your Name: `,
  });

  const { num }: { num: number } = await inquirer.prompt({
    type: "number",
    name: "num",
    message: `Type 1 if you like to talk to others and 2 if you would rather keep it to yourself: `,
  });
  //Object
  const stu = new Student();
  stu.askQuestion(num);
  stu.Name = name;

  console.log(
    `\n\t${chalk.cyan(`**********SUMMARY***********`)}
     \n\tYour Name is ${chalk.bold.green(
       name
     )}.\n\tYour Personality is ${chalk.italic.yellow(stu.getPersonlaity())}.\n`
  );
}; //cliInterface module end's
