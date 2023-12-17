import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNumUnderTen, checkCorrectness } from './utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }

  if (num === 2) {
    return 'yes';
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playPrimeGame = () => {
  const playerName = getName();

  let continueOrEnd = true;
  for (let i = 0; i < 3; i += 1) {
    if (continueOrEnd === false) {
      return;
    }
    const num = genNumUnderTen();
    const correctAnswer = isPrime(num);
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `).toLowerCase();
    const isCorrect = checkCorrectness(answer, correctAnswer, playerName);
    continueOrEnd = isCorrect;
  };
  console.log(`Congratulations, ${playerName}!`);
};

export default playPrimeGame;
