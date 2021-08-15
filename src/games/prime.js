import startBrainGames from '../../bin/brain-games.js';
import getRandom from '../utils.js';

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

const genGameRound = () => {
  const number = getRandom();
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startBrainGames(genGameRound, description);
