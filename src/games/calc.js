import startBrainGames from '../../bin/brain-games.js';
import getRandom from '../utils.js';

const collectionOfOperators = ['+', '-', '*'];

const getRandomOperator = () => collectionOfOperators[getRandom(0, 2)];

const calculateOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    case '*': return (num1 * num2);
    default: throw new Error(`Операция ${operation} не поддерживается.`);
  }
};

const description = 'What is the result of the expression?';

const genGameRound = () => {
  const number1 = getRandom(0, 100);
  const number2 = getRandom(0, 100);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculateOperation(number1, operator, number2));
  return [question, answer];
};

export default () => startBrainGames(genGameRound, description);
