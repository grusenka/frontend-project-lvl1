import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

const attempts = 3;

const startBrainGames = (features, description) => {
  greeting();
  console.log(description);
  console.log('');
  const userName = getPlayerName();

  for (let countAttempts = 0; countAttempts < attempts; countAttempts += 1) {
    const [question, answer] = features();

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default startBrainGames;
