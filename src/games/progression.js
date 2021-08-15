import startBrainGames from '../../bin/brain-games.js';

const lengthOfProgression = 10;

const getArithmProgression = () => {
  const firstNum = Math.floor(Math.random() * 10);
  const difference = Math.floor(Math.random() * 10);
  const numbers = [firstNum];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    numbers.push(firstNum + (difference * i));
  }
  return numbers;
};

const description = 'What number is missing in this progression?';

const genGameRound = () => {
  const progression = getArithmProgression();
  const hiddenIndex = Math.floor(Math.random() * 9);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startBrainGames(genGameRound, description);
