import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// this code is only for brain-games task
export const brainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// --- game engine code starts here ---
const getQuestion = gameInfo => car(gameInfo);
const getAnswer = gameInfo => cdr(gameInfo);

export const brainGameEngine = (description, game) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const questionNumber = 3;

  for (let i = questionNumber; i >= 0; i -= 1) {
    if (i === 0) {
      console.log(`Congratulations, ${playerName}!`);
      break;
    }
    const gameInfo = game();
    const question = getQuestion(gameInfo);
    const correctAnswer = getAnswer(gameInfo);

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) console.log('Correct!');
    else {
      console.log(`"${playerAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
};
// --- game engine code ends here ---
