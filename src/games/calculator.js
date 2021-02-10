import engine from '../index.js';
import { createRandomNumber, getRandomValue, performOperation } from '../utils.js';

const description = 'What is the result of the expression?';

const gameLogic = () => {
  const first = createRandomNumber(100, 1);
  const second = createRandomNumber(100, 1);
  const operator = getRandomValue(['+', '-', '*']);
  const question = `${first} ${operator} ${second}`;
  const correctResult = String(performOperation(first, second, operator));

  return { question, correctResult };
};

export default () => {
  engine(description, gameLogic);
};
