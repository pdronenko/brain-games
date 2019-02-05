import { randomFunction } from '..';
import { cons } from 'hexlet-pairs';

export default () => {
  const description = 'Answer "yes" if number even, otherwise answer "no".';
  const randomNumber = randomFunction();
  const question = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(description, cons(question, correctAnswer));
};
