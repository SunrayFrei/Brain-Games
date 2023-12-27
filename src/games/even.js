import getNumber from '../utils.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const roundOfGame = () => {
  const number = getNumber(0, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playEvenGame = () => {
  gameLogic(description, roundOfGame);
};
export default playEvenGame;
