import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 20;
const maxNum = 100;

const getGcd = (smallerNum, biggestNum) => {
  if (biggestNum % smallerNum === 0) {
    return smallerNum;
  }

  return getGcd(smallerNum - 1, biggestNum);
};

const generateGcdGameInfo = () => {
  const randomNum1 = generateRandomNum(minNum, maxNum);
  const randomNum2 = generateRandomNum(minNum, maxNum);

  const smallerNum = Math.min(randomNum1, randomNum2);
  const biggestNum = Math.max(randomNum1, randomNum2);

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${getGcd(smallerNum, biggestNum)}`;
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateGcdGameInfo);
