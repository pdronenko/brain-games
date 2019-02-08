import brainGameEngine from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 99;
const maxNumOfOperator = 3;

const getOperatorByNum = (num) => {
  switch (num) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return 'wrong number!';
  }
};

const getOperationResult = (operator, num1, num2) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 'wrong operator!';
  }
};

const generateCalcGameInfo = () => {
  const randomNum1 = generateRandomNum(minNum, maxNum);
  const randomNum2 = generateRandomNum(minNum, maxNum);

  const operator = getOperatorByNum(generateRandomNum(minNum, maxNumOfOperator));

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = `${getOperationResult(operator, randomNum1, randomNum2)}`;
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateCalcGameInfo);
