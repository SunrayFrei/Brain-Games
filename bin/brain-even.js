#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const playGame = () => {
  console.log('May I have your name?')

  const userName = readlineSync.question('Your answer: ');

  console.log(`Hello, ${userName}!`);

  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question(`Your answer: `);

    const isCorrect = number % 2 === 0 ? 'yes' : 'no';

    if (answer.toLowerCase() === isCorrect) {
      console.log(`Correct!`);
      correctAnswers += 1;
    } else if (answer.toLowerCase() !== isCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isCorrect}'.\nLet's try again, ${userName}!`);
      correctAnswers += 3;
    }
  }
}
playGame();