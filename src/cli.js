import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games');
};
const getName = () => readlineSync.question('May I have you name? ');

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export {
  welcome,
  getName,
  greeting,
};
