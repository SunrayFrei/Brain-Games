import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNumber, checkCorrectness } from './utils.js';

const generateProgression = () => {
  const length = genNumber(0, 6, 5);

  const start = genNumber(0, 10);
  const difference = genNumber(0, 5);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (i * difference));
  }
  return progression;
};

const hideElement = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';
  const progressionAsString = hiddenProgression.join(' ');
  return progressionAsString;
};

const playProgressionGame = () => {
  const playerName = getName();

  let continueOrEnd = true;
  for (let i = 0; i < 3; i += 1) {
    if (continueOrEnd === false) {
      return;
    }
    const progression = generateProgression();
    const index = Math.floor(Math.random() * (progression.length - 1));
    const hiddenProgression = hideElement(progression, index);
    console.log('What number is missing in the progression?');
    console.log(`Question: ${hiddenProgression}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const isCorrect = checkCorrectness(answer, progression[index], playerName);
    continueOrEnd = isCorrect;
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default playProgressionGame;
