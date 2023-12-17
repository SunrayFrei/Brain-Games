import readlineSync from 'readline-sync';
import getName from './cli.js';
import { checkCorrectness } from './utils.js';

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;

  const start = Math.floor(Math.random() * 10) + 1;
  const difference = Math.floor(Math.random() * 5) + 1;
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
