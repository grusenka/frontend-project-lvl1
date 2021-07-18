#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const collectionOfOperators = ['+', '-', '*'];

const getRandomOperator = () => collectionOfOperators[Math.floor(Math.random() * 3)];

const calculateOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    default: return (num1 * num2);
  }
};

const brainCalc = () => {
  console.log('Welcome to the Brain Calc!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = getRandomOperator();

    const answer = readlineSync.question(`Question: ${number1} ${operator} ${number2} `);
    const correctAnswer = calculateOperation(number1, operator, number2);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
};

brainCalc();
