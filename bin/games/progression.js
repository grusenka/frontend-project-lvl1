import { cons } from 'hexlet-pairs';
import gameFlow from '../game-flow';
import getRandom from '../utils';

const lengthOfProgression = 10;

const getArithmProgression = () => {
  const firstNum = Math.floor(Math.random() * 10);
  const difference = Math.floor(Math.random() * 10);
  const arrayOfNum = [firstNum];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    arrayOfNum.push(firstNum + (difference * i));
  }
  return Array.from(arrayOfNum, (j) => String(j));
};

const description = 'What number is missing in this progression?';

const gameFeature = () => {
  const progression = getArithmProgression();
  const hiddenIndex = Math.floor(Math.random() * 9);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = `${progression}`;
  return cons(question, correctAnswer);
};

export default () => gameFlow(gameFeature, description);
