export const apiService = async () => {
  let fetchData = await fetch(
    `https://v6.exchangerate-api.com/v6/3c85c0bd193a7a0f863e07fb/latest/PKR`
  );
  let res = await fetchData.json();
  return res.conversion_rates;
};
