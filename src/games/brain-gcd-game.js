import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 2;
const maxNum = 99;

const getGcd = (num, divisor) => (num % divisor === 0 ? divisor : getGcd(divisor, num % divisor));

const generateGcdGameInfo = () => {
  const randomNum1 = generateRandomNum(minNum, maxNum);
  const randomNum2 = generateRandomNum(minNum, maxNum);

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${getGcd(randomNum1, randomNum2)}`;
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateGcdGameInfo);
