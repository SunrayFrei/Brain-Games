import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNumUnderTen, isPrime, correctnessCheck } from './general.js';

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
    const isCorrect = correctnessCheck(answer, correctAnswer, playerName);
    continueOrEnd = isCorrect;
  };
  console.log(`Congratulations, ${playerName}`);
};

export default playPrimeGame;
