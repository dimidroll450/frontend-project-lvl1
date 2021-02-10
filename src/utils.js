export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
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

export const getGcd = (a, b) => {
  if (!b) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};
