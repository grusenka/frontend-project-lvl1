import { cons } from 'hexlet-pairs';
import gameFlow from '../game-flow';
import getRandom from '../utils';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const gameFeature = () => {
  const number = getRandom(1, 100);
  return cons(`${number}`, isEven(number) ? 'yes' : 'no');
};

export default () => gameFlow(gameFeature, description);
