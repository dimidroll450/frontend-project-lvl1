import engine from '../index.js';
import {
  createRandomArray,
  createRandomNumber,
  getRandomValue,
  replaceWith,
} from '../utils.js';

const description = 'What number is missing in the progression?';

const gameLogic = () => {
  const startNumber = createRandomNumber(100, 1);
  const array = createRandomArray(startNumber);
  const correctResult = String(getRandomValue(array));
  const question = replaceWith(correctResult, '..', array);
  return { question, correctResult };
};

export default () => {
  engine(description, gameLogic);
};
