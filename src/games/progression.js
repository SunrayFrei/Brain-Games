import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = (lengthOfTheProg, startNumber, stepOfTheProgression) => {
  const progression = [];
  for (let i = 1; i < lengthOfTheProg; i += 1) {
    progression.push(startNumber + (i * stepOfTheProgression));
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
  const lengthOfTheProg = getRandomNumber(0, 6) + 5;
  const startNumber = getRandomNumber(0, 10); 
  const stepOfTheProgression = getRandomNumber(0, 5);

  const progression = generateProgression(lengthOfTheProg, startNumber, stepOfTheProgression);
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
