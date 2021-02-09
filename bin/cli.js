import readlincSync from 'readline-sync';

export default () => {
  const name = readlincSync.question('May I know you name?');
  console.log(`Hello, ${name}`);
};
