const add = (num1: number, num2: number) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return `${num1} + ${num2} = ${num1 + num2}`;
};

export default add;
