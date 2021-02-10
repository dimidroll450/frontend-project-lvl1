import engine from '../index.js';
import { getRandom, getGcd } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const logicGame = () => {
  const first = getRandom(100, 1);
  const second = getRandom(100, 1);
  const question = `${first} ${second}`;
  const correctResult = String(getGcd(first, second));
  return { question, correctResult };
};

export default () => {
  engine(description, logicGame);
};
