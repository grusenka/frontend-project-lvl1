import { cons } from 'hexlet-pairs';
import gameFlow from '../game-flow';
import getRandom from '../utils';

const getRemain = (x, y) => x % y;

const getGreatComDiv = (a, b) => ((b === 0) ? a : getGreatComDiv(b, getRemain(a, b)));

const description = 'Find the greatest common divisor of given numbers.';

const gameFeature = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGreatComDiv(number1, number2));

  return cons(question, correctAnswer);
};

export default () => gameFlow(gameFeature, description);
