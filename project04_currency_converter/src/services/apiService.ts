export const apiService = async () => {
  let fetchData = await fetch(
    `https://v6.exchangerate-api.com/v6/a88ce2c3266454ca55bb4d59/latest/USD`
  );
  let res = await fetchData.json();
  return res.conversion_rates;
};
