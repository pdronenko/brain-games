import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const newLine = () => '\n';

const greeting = () => 'Welcome to the Brain Games!';

export const brainGames = () => {
  console.log(`${greeting()}${newLine()}`);
  askName();
};

export const brainEven = () => {
  greeting();
  console.log(`Answer "yes" if number even, otherwise answer "no".${newLine()}`);

  const name = askName();
  console.log('');

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
      console.log(`"${playerAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }

  if (questionNumber === 0) console.log(`Congratulations, ${name}!`);
};
