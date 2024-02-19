//api response type
export type resQuizType = [
  {
    type: "multiple";
    difficulty: `easy` | `medium` | `hard`;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
];

export const apiService = async (
  level: `easy` | `medium` | `hard`
): Promise<resQuizType> => {
  let fetchData = await fetch(
    `https://opentdb.com/api.php?amount=5&category=18&difficulty=${level}&type=multiple`
  );
  let res = await fetchData.json();
  return res.results;
};
