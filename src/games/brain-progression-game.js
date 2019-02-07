import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const minNum = 1;
const maxNum = 10;
let answerNum = 0;

const generateProg = (progStartNum, constant, questionNum) => {
  const iter = (num, str, counter) => {
    if (counter === 0) {
      return str;
    }
    let string = `${str} ${num}`;
    if (counter === questionNum) {
      answerNum = num;
      string = `${str} ..`;
    }
    return iter(num + constant, string, counter - 1);
  };
  return iter(progStartNum, '', maxNum);
};

const generateProgGameInfo = () => {
  const constant = generateRandomNum(minNum, maxNum);
  const progStartNum = generateRandomNum(minNum, maxNum);
  const questionNum = generateRandomNum(minNum, maxNum);

  const question = generateProg(progStartNum, constant, questionNum);
  const correctAnswer = `${answerNum}`;
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateProgGameInfo);
