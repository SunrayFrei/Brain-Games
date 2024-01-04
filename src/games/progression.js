import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = () => {
  const lengthCorrectionNumber = 5;
  const length = getRandomNumber(0, 6) + lengthCorrectionNumber;

  const start = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 5);
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

const playARound = () => {
  const progression = generateProgression();
  const index = getRandomNumber(0, progression.length - 1);
  const hiddenProgression = hideElement(progression, index);
  const question = `${hiddenProgression}`;
  const correctAnswer = progression[index].toString();
  return [question, correctAnswer];
};
const playProgressionGame = () => {
  runGameLogic(description, playARound);
};

export default playProgressionGame;
