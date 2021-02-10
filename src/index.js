import readlineSync from 'readline-sync';
import congratPlayer from './cli.js';

export default (description, gameLogic) => {
  console.log('Welcome to the Brain Games');
  const name = congratPlayer();
  console.log(`${description}`);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctResult } = gameLogic();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const isCorrect = playerAnswer === correctResult;

    if (!isCorrect) {
      console.log(` ${playerAnswer} is wrong answer ;(. Correct answer was ${correctResult}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}.`);
};
