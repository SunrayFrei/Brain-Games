import getNumber from '../utils.js';
import gameLogic from '../index.js';

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
      return 0;
  }
};

const roundOfGame = () => {
  const operators = ['+', '-', '*'];
  const randomIndexOfOperators = getNumber(0, operators.length - 1);
  const operator = operators[randomIndexOfOperators];

  const num1 = getNumber(0, 10);
  const num2 = getNumber(0, 10);
  const question = `${num1} ${operator} ${num2}`;
  const expression = getExpression(num1, num2, operator).toString();
  return [question, expression];
};

const playCalcGame = () => {
  gameLogic(description, roundOfGame)
};

export default playCalcGame;
