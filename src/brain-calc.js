import readlineSync from 'readline-sync';
import getName from './cli.js';
import { genNumUnderTen, checkCorrectness } from './utils.js';

const getExpression = (num1, num2, operator) => {
  let expression = 0;
  switch (operator) {
    case '+':
      expression = num1 + num2;
      break;
    case '-':
      expression = num1 - num2;
      break;
    case '*':
      expression = num1 * num2;
      break;
    default:
      expression = 0;
break;
};
return expression;
};

const playCalcGame = () => {
  const playerName = getName();

  let continueOrEnd = true;

  for (let i = 0; i < 3; i += 1) {
    if (continueOrEnd === false) {
      return;
    }
    const num1 = genNumUnderTen();
    const num2 = genNumUnderTen();
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const expression = getExpression(num1, num2, operator);
    console.log('What is the result of the expression?');
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = Number(readlineSync.question(`Your answer: `));
    const isCorrect = checkCorrectness(answer, expression, playerName);
    continueOrEnd = isCorrect;
  };
  console.log(`Congratulations, ${playerName}!`);
};

export default playCalcGame;
