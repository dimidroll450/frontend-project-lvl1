import readlineSync from 'readline-sync';
import { welcome, getName, greeting } from './cli.js';

export default (description, gameLogic) => {
  welcome();
  const name = getName();
  greeting(name);
  console.log(`${description}`);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctResult } = gameLogic();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const isCorrect = playerAnswer === correctResult;

    if (!isCorrect) {
      console.log(` ${playerAnswer} is wrong answer ;(. Correct answer was ${correctResult}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
