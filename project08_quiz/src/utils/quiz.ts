import inquirer from "inquirer";
import { resQuizType } from "../services/apiService.js";

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

    let { quizQuery } = await inquirer.prompt({
      type: "list",
      name: "quizQuery",
      message: data[i].question,
      choices: answers,
    });
  }
};
