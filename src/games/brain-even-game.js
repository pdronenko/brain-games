import { generateRandomNum, brainGameEngine } from '..';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even, otherwise answer "no".';
const isEven = num => num % 2 === 0;

const brainEvenGame = () => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNum(min, max);

  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(description, cons(question, correctAnswer));
};

export default () => brainGameEngine(brainEvenGame);
