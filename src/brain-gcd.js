import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNumUnderTen, checkCorrectness } from './utils.js';

const findGCD = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const playGCDGame = () => {
  const playerName = getName();
  
  let continueOrEnd = true;
  for (let i = 0; i < 3; i += 1) {
    if (continueOrEnd === false) {
      return;
    }
  console.log(`Find the greatest common divisor of given numbers.`);
  const num1 = genNumUnderTen();
  const num2 = genNumUnderTen();
  const resultGCD = findGCD(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const answer = Number(readlineSync.question(`Your answer: `));
  const isCorrect = checkCorrectness(answer, resultGCD, playerName);
  continueOrEnd = isCorrect;
  };
  console.log(`Congratulations, ${playerName}!`);
};

export default playGCDGame;
