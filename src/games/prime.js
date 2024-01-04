import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playARound = () => {
  const number = getRandomNumber(0, 10);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playPrimeGame = () => {
  runGameLogic(description, playARound);
};

export default playPrimeGame;
