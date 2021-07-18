#!/usr/bin/env node
import readlineSync from 'readline-sync';

const lengthOfProgression = 10;

const getArithmProgression = () => {
  const firstNum = Math.floor(Math.random() * 10);
  const difference = Math.floor(Math.random() * 10);
  const arrayOfNum = [firstNum];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    arrayOfNum.push(firstNum + (difference * i));
  }
  return Array.from(arrayOfNum, (j) => String(j));
};

const brainProgression = () => {
  console.log('Welcome to the Brain Gcd!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in this progression?');

  for (let i = 0; i < 3; i += 1) {
    const progression = getArithmProgression();
    const hiddenIndex = Math.floor(Math.random() * 9);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const answer = readlineSync.question(`Question: ${progression} `);
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

brainProgression();
