import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even, otherwise answer "no".';
const isEven = num => num % 2 === 0;
const minNum = 1;
const maxNum = 100;

const generateEvenGameInfo = () => {
  const randomNumber = generateRandomNum(minNum, maxNum);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateEvenGameInfo);
