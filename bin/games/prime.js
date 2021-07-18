import { cons } from 'hexlet-pairs';
import gameFlow from '../game-flow';
import getRandom from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const n = Math.sqrt(num);
  for (let i = 2; i <= n; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Is this number prime?';

const gameFeature = () => {
  const number = getRandom();
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameFlow(gameFeature, description);
