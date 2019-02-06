import { generateRandomNum, brainGameEngine } from '..';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
const getOperation = (operator, num1, num2) => {
  switch (operator) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
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

  const operator = getOperation(generateRandomNum(minNum, maxNumOfOperator));

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = `${getOperation(operator, randomNum1, randomNum2)}`;
  return cons(description, cons(question, correctAnswer));
};

export default () => brainGameEngine(brainCalcGame);
