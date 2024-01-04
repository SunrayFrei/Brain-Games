import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const playARound = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playEvenGame = () => {
  runGameLogic(description, playARound);
};
export default playEvenGame;
