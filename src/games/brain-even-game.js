import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even, otherwise answer "no".';
const isEven = num => num % 2 === 0;

const generateEvenGameInfo = () => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNum(min, max);

  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateEvenGameInfo);
