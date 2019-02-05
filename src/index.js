import readlineSync from 'readline-sync';

// I think it wasn't necessary to make text colored, but I realized it too late
const colors = require('colors'); // eslint-disable-line no-unused-vars

const askName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
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
  const redBold = text => text.red.bold;
  console.log(`Answer "${redBold('yes')}" if number ${'even'.bold}, otherwise answer "${redBold('no')}".`);

  const name = askName();

  const randomFunction = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const minNumber = 1;
  const maxNumber = 100;
  let questionNumber = 3;

  for (; questionNumber > 0; questionNumber -= 1) {
    const randomNumber = randomFunction(minNumber, maxNumber);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`"${redBold(playerAnswer)}" is wrong answer ;(.`);
      console.log(`Correct answer was "${redBold(correctAnswer)}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }

  if (questionNumber === 0) console.log(`Congratulations, ${name}!`);
};
