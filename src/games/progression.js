import brainGameEngine from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const minNum = 0;
const minStepNum = 1;
const maxNum = 9;
const lastNumInProg = 10;

const generateProgString = (progStartNum, progStep, hiddenNumPosition) => {
  let progString = '';

  for (let i = 0; i < lastNumInProg; i += 1) {
    const nextStepNum = i !== hiddenNumPosition ? progStartNum + (progStep * i) : '..';
    progString = `${progString} ${nextStepNum}`;
  }

  return progString;
};

const generateProgGameInfo = () => {
  const progStartNum = generateRandomNum(minNum, maxNum);
  const progStep = generateRandomNum(minStepNum, maxNum);
  const hiddenNumPosition = generateRandomNum(minNum, maxNum);

  const correctAnswer = `${progStartNum + (progStep * hiddenNumPosition)}`;
  const question = generateProgString(progStartNum, progStep, hiddenNumPosition);
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateProgGameInfo);