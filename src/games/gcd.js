import startBrainGames from '../../bin/brain-games.js';
import getRandom from '../utils.js';

const getRemain = (x, y) => x % y;

const getGreatComDiv = (a, b) => ((b === 0) ? a : getGreatComDiv(b, getRemain(a, b)));

const description = 'Find the greatest common divisor of given numbers.';

const genGameRound = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const question = `${number1} ${number2}`;
  const answer = String(getGreatComDiv(number1, number2));

  return [question, answer];
};

export default () => startBrainGames(genGameRound, description);
