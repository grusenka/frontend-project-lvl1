#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRemain = (x, y) => x % y;

const getGreatComDiv = (a, b) => ((b === 0) ? a : getGreatComDiv(b, getRemain(a, b)));

const brainGcd = () => {
  console.log('Welcome to the Brain Gcd!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const answer = readlineSync.question(`Question: ${number1} ${number2} `);
    const correctAnswer = String(getGreatComDiv(number1, number2));
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

brainGcd();
