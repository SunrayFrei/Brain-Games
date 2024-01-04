import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What is the result of the expression?';

const getExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const playARound = () => {
  const operators = ['+', '-', '*'];
  const randomIndexOfOperators = getRandomNumber(0, operators.length - 1);
  const operator = operators[randomIndexOfOperators];

  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const question = `${num1} ${operator} ${num2}`;
  const expression = getExpression(num1, num2, operator).toString();
  return [question, expression];
};

const playCalcGame = () => {
  runGameLogic(description, playARound);
};

export default playCalcGame;
