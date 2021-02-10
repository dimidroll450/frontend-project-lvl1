import engine from '../index.js';
import { createRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  const question = createRandomNumber(100, 1);
  const correctResult = parseInt(question, 10) % 2 === 0 ? 'yes' : 'no';

  return { question, correctResult };
};

export default () => {
  engine(description, gameLogic);
};
