import readlincSync from 'readline-sync';

export const getUserName = () => {
  const name = readlincSync.question('May I know you name?');
  console.log(`Hello, ${name}`);
};