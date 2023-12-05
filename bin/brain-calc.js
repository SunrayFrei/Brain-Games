#!/usr/bin/env node
import getName from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?')
const userName = readlineSync.question('Your answer: ');
console.log(`Hello, ${userName}!`);

const playCalcGame = () => {
  let correctAnswers = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1 ) {

    const operators = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
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

    console.log('What is the result of the expression?');
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = Number(readlineSync.question(`Your answer: `));

    if (userAnswer === expression) {
      console.log(`Correct!`);
      correctAnswers += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expression}`);
      console.log(`Let's try again, ${userName}!`);
      i = i + 3;
    }
  }

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playCalcGame();
