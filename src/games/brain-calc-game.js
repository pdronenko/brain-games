import { generateRandomNum, brainGameEngine } from '..';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
const operation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'it is not operator!';
  }
};

const brainCalcGame = () => {
  const minNum = 1;
  const maxNum = 100;
  const maxNumOfOperator = 4;
  const randomNum1 = generateRandomNum(minNum, maxNum);
  const randomNum2 = generateRandomNum(minNum, maxNum);

  const operatorNum = generateRandomNum(minNum, maxNumOfOperator);
  const operator = operatorNum === 1 ? '+' : operatorNum === 2 ? '-' : '*';

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = `${operation(randomNum1, randomNum2, operator)}`;
  return cons(description, cons(question, correctAnswer));
};

export default () => brainGameEngine(brainCalcGame);
