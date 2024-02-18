export const apiService = async (level: `easy` | `medium` | `hard`) => {
  let fetchData = await fetch(
    `https://opentdb.com/api.php?amount=5&category=18&difficulty=${level}&type=multiple`
  );
  let res = await fetchData.json();
  return res.results;
};
