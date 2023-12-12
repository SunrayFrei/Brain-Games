import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNumUnderTen, correctnessCheck, findGCD } from './general.js';



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
  console.log(`Question: ${num1} and ${num2}`);
  const answer = Number(readlineSync.question(`Your answer: `));
  const isCorrect = correctnessCheck(answer, resultGCD, playerName);
  continueOrEnd = isCorrect;
  };
  console.log(`Congratulations, ${playerName}`);
};

export default playGCDGame;
