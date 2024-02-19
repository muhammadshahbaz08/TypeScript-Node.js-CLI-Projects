import inquirer from "inquirer";
import { resQuizType } from "../services/apiService.js";
import chalk from "chalk";
import { result } from "./result.js";

export const quiz = async (data: resQuizType) => {
  let score: number = 0;

  for (let i = 0; i < 5; i++) {
    /**
     * we are making answer's array b/c in API response, we are getting correct answer Seprate &
     * Incoorect answer araay seprate,...like e.g,
     * correct_answer: 'Objective-C',
     * incorrect_answers: [ 'C#', 'Ruby', 'C++' ]
     **/
    const answers: string[] = [
      ...data[i].incorrect_answers,
      data[i].correct_answer,
    ];

    //displaying Questions's
    let { quizQuery } = await inquirer.prompt({
      type: "list",
      name: "quizQuery",
      message: data[i].question,
      choices: answers,
    });

    // Score Calc. & Correct Answer Validation for user ..

    if (quizQuery === data[i].correct_answer) {
      ++score;
      console.log(`\n\tYour Answer is ${chalk.bold.green(`CORRECT`)}.`);
    } else {
      console.log(`\n\tYour Answer is ${chalk.bold.redBright(`WRONG`)}.`);
      console.log(
        `\tCorrect Answer is ${chalk.green.bold(data[i].correct_answer)}\n`
      );
    }
  } //loop end's

  result(score);
};
