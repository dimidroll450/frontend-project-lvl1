import engine from '../index.js';
import { createRandomNumber, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const number = createRandomNumber(100, 2);
  const correctResult = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return { question, correctResult };
};

export default () => {
  engine(description, gameLogic);
};
