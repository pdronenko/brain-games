import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const minNum = 1;
const maxNum = 10;
const getAnswer = info => car(info);
const getProgString = info => cdr(info);

const generateProg = (progStartNum, constant, hiddenNum) => {
  let currentNum = progStartNum;
  let answerNum = 0;
  let progString = '';

  for (let i = minNum; i <= maxNum; i += 1) {
    if (i !== hiddenNum) {
      progString = `${progString} ${currentNum}`;
      currentNum += constant;
    } else {
      answerNum = currentNum;
      currentNum += constant;
      progString = `${progString} ..`;
    }
  }
  return cons(answerNum, progString);
};

const generateProgGameInfo = () => {
  const progStartNum = generateRandomNum(minNum, maxNum);
  const constant = generateRandomNum(minNum, maxNum);
  const hiddenNum = generateRandomNum(minNum, maxNum);

  const progressionInfo = generateProg(progStartNum, constant, hiddenNum);
  const question = getProgString(progressionInfo);
  const correctAnswer = `${getAnswer(progressionInfo)}`;
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateProgGameInfo);
