import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I know you name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
