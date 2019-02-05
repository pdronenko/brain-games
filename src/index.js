import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// this code is only for brain-games task
export const brainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// --- game engine code starts here ---
const getDescription = game => car(game);
const getInfo = game => cdr(game);
const getQuestion = info => car(info);
const getAnswer = info => cdr(info);

// this is random number function
// minNumber used for avoid zero in randomFunction result
const minNumber = 1;
const maxNumber = 100;
export const randomFunction = () => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

export const brainGameEngine = (game) => {
  console.log(`Welcome to the Brain Games!\n${getDescription(game())}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let questionNumber = 3;

  for (; questionNumber > 0; questionNumber -= 1) {
    const info = getInfo(game());
    const question = getQuestion(info);
    const correctAnswer = getAnswer(info);
    console.log(`Question: ${question}`);
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
// --- game engine code ends here ---
