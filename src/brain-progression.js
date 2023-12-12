import readlineSync from 'readline-sync';
import getName from './cli.js';
import { correctnessCheck, hideElement, generateProgression } from './general.js';

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
    console.log(hiddenProgression);
    const answer = Number(readlineSync.question(`Your answer: `));
    const isCorrect = correctnessCheck(answer, progression[index], playerName);
    continueOrEnd = isCorrect;
  };
  console.log(`Congratulations, ${playerName}`);
};

export default playProgressionGame;
