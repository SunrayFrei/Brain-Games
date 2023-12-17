import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNum, checkCorrectness } from './utils.js';

const playEvenGame = () => {
  const playerName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let continueOrEnd = true;

  for (let i = 0; i < 3; i += 1) {
    if (continueOrEnd === false) {
      return;
    }
    const number = genNum();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const isCorrect = checkCorrectness(answer, correctAnswer, playerName);
    continueOrEnd = isCorrect;
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default playEvenGame;
