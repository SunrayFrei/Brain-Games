import getNumber from '../utils.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }

  if (number === 2) {
    return 'yes';
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const roundOfGame = () => {
  const number = getNumber(0, 10);
  const correctAnswer = isPrime(number);
  return [number, correctAnswer];
};

const playPrimeGame = () => {
  gameLogic(description, roundOfGame);
};

export default playPrimeGame;