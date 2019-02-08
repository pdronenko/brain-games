import brainGameEngine from '..';
import generateRandomNum from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const minNum = 0;
const minStepNum = 1;
const maxNum = 9;
const finishPosition = 10;
const getAnswer = info => car(info);
const getProgString = info => cdr(info);

const generateProgAndAnswer = (progStartNum, progStep, hiddenNumPosition) => {
  let answerNum = 0;
  let progString = '';

  for (let i = 0; i < finishPosition; i += 1) {
    let nextStepNum = progStartNum + (progStep * i);
    if (i === hiddenNumPosition) {
      answerNum = nextStepNum;
      nextStepNum = '..';
    }
    progString = `${progString} ${nextStepNum}`;
  }
  return cons(answerNum, progString);
};

const generateProgGameInfo = () => {
  const progStartNum = generateRandomNum(minNum, maxNum);
  const progStep = generateRandomNum(minStepNum, maxNum);
  const hiddenNumPosition = generateRandomNum(minNum, maxNum);

  const progressionInfo = generateProgAndAnswer(progStartNum, progStep, hiddenNumPosition);
  const correctAnswer = `${getAnswer(progressionInfo)}`;
  const question = getProgString(progressionInfo);
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateProgGameInfo);
