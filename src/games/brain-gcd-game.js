import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 2;
const maxNum = 100;

const getGcd = (num1, num2) => {
  const smallerNum = Math.min(num1, num2);

  const findDivisor = (divisor) => {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    return findDivisor(divisor - 1);
  };

  return findDivisor(smallerNum);
};

const generateGcdGameInfo = () => {
  const randomNum1 = generateRandomNum(minNum, maxNum);
  const randomNum2 = generateRandomNum(minNum, maxNum);

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${getGcd(randomNum1, randomNum2)}`;
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateGcdGameInfo);
