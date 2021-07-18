#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

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

const brainPrime = () => {
  console.log('Welcome to the Brain Prime!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Is this number prime?');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();

    const answer = readlineSync.question(`Question: ${number} `);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
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

brainPrime();
