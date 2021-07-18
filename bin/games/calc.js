import { cons } from 'hexlet-pairs';
import gameFlow from '../game-flow';
import getRandom from '../utils';

const collectionOfOperators = ['+', '-', '*'];

const getRandomOperator = () => collectionOfOperators[getRandom(0, 2)];

const calculateOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    default: return (num1 * num2);
  }
};

const description = 'What is the result of the expression?';

const gameFeature = () => {
  const number1 = getRandom(0, 100);
  const number2 = getRandom(0, 100);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculateOperation(number1, operator, number2));
  return cons(question, correctAnswer);
};

export default () => gameFlow(gameFeature, description);
