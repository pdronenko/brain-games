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
const questionsToPlayerCount = 3;

export const brainGameEngine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = questionsToPlayerCount; i > 0; i -= 1) {
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
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
// --- game engine code ends here ---
