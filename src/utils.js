export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const getRandomValue = (args) => args[Math.floor(Math.random() * args.length)];
// because eval() is bad
export const performOperation = (first, second, oprerator) => {
  let result = 0;
  if (oprerator === '+') {
    result = parseInt(first, 10) + parseInt(second, 10);
  }
  if (oprerator === '-') {
    result = parseInt(first, 10) - parseInt(second, 10);
  }
  if (oprerator === '*') {
    result = parseInt(first, 10) * parseInt(second, 10);
  }

  return result;
};
