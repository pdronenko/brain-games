import { brainGameEngine } from '..';
import generateRandomNum from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const minNum = 1;
const maxNum = 10;
const startPosition = minNum;
const finishPosition = maxNum;
const getAnswer = info => car(info);
const getProgString = info => cdr(info);

const generateProgAndAnswer = (progStartNum, constant, hiddenNumPosition) => {
  let currentNum = progStartNum;
  let answerNum = 0;
  let progString = '';

  for (let i = startPosition; i <= finishPosition; i += 1, currentNum += constant) {
    if (i !== hiddenNumPosition) progString = `${progString} ${currentNum}`;
    else {
      answerNum = currentNum;
      progString = `${progString} ..`;
    }
  }
  return cons(answerNum, progString);
};

const generateProgGameInfo = () => {
  const progStartNum = generateRandomNum(minNum, maxNum);
  const constant = generateRandomNum(minNum, maxNum);
  const hiddenNumPosition = generateRandomNum(minNum, maxNum);

  const progressionInfo = generateProgAndAnswer(progStartNum, constant, hiddenNumPosition);
  const correctAnswer = `${getAnswer(progressionInfo)}`;
  const question = getProgString(progressionInfo);
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateProgGameInfo);
