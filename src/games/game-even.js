import readlincSync from 'readline-sync';
import congratPlayer from '../cli.js';
import getRandom from '../utils.js';

const name = congratPlayer();

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(1000, 1);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const playerAnswer = readlincSync.question('Your answer: ');
    const isCorrect = playerAnswer === correctAnswer;
    if (!isCorrect) {
      console.log(` ${playerAnswer} is wrong answer. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};
