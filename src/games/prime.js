import brainGameEngine from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 2;
const maxNum = 999;
const minDivisor = 2;

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if (divisor < Math.sqrt(num)) {
      return num % divisor === 0 ? false : iter(divisor + 1);
    }
    return true;
  };

  return iter(minDivisor);
};

const generatePrimeGameInfo = () => {
  const randomNum = generateRandomNum(minNum, maxNum);

  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generatePrimeGameInfo);
