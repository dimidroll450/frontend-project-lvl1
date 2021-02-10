export const createRandomNumber = (max, min) => Math.floor(Math.random() * (max - min) + min);

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

export const createRandomArray = (startNumber) => {
  const arrayLength = createRandomNumber(11, 5);
  const result = [String(startNumber)];

  for (let i = 0; i < arrayLength; i += 1) {
    const nextNumber = parseInt(result[i], 10) + 1;
    result.push(String(nextNumber));
  }
  return result;
};

export const replaceWith = (currentValue, desireValue, array) => {
  const arr = array;
  const index = arr.indexOf(currentValue);
  if (index !== -1) {
    arr[index] = desireValue;
  }
  return arr;
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
