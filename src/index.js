import readlineSync from 'readline-sync';

const colors = require('colors'); // eslint-disable-line no-unused-vars

const askName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const brainGames = () => {
  greeting();
  askName();
};

export const evenGame = () => {
  greeting();
  console.log(`Answer ${'"yes"'.red} ${"if".bold} number even otherwise answer ${'"no"'.red}`);

  const name = askName();
};

