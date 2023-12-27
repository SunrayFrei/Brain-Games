import getNumber from '../utils.js';
import gameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const roundOfGame = () => {
  const number1 = getNumber(0, 10);
  const number2 = getNumber(0, 10);
  const correctAnswer = findGCD(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const playGCDGame = () => {
  gameLogic(description, roundOfGame)
};

export default playGCDGame;
