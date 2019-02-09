import brainGameEngine from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const minNum = 0;
const maxNum = 9;
const progressionLength = 10;

const generateProgString = (progStartNum, progStep, hiddenNumPosition) => {
  const iter = (str, i) => {
    if (i < progressionLength) {
      const nextStepNum = i !== hiddenNumPosition ? progStartNum + (progStep * i) : '..';
      return iter(`${str} ${nextStepNum}`, i + 1);
    }

    return str.trim();
  };

  return iter('', 0);
};

const generateProgGameInfo = () => {
  const progStartNum = generateRandomNum(minNum, maxNum);
  const progStep = generateRandomNum(1, maxNum);
  const hiddenNumPosition = generateRandomNum(minNum, progressionLength - 1);

  const correctAnswer = `${progStartNum + (progStep * hiddenNumPosition)}`;
  const question = generateProgString(progStartNum, progStep, hiddenNumPosition);
  return cons(question, correctAnswer);
};

export default () => brainGameEngine(description, generateProgGameInfo);
