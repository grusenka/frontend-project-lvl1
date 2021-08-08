import startBrainGames from '../brain-games.js';
import getRandom from '../utils.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const genGameRound = () => {
  const number = getRandom(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => startBrainGames(genGameRound, description);
