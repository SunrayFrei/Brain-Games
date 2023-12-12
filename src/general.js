const genNumUnderTen = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const genNum = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const correctnessCheck = (playersAnswer, correctAnswer, playerName) => {
  if (playersAnswer === correctAnswer) {
    console.log(`Correct!`);
    return true;
  } else {
    console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return false;
  }
};

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

const findGCD = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  
  const start = Math.floor(Math.random() * 10) + 1;
  const difference = Math.floor(Math.random() * 5) + 1;
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (i * difference));
  };
  return progression;
};

const hideElement = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';
  const progressionAsString = hiddenProgression.join(' ');
  return progressionAsString; 
};

const isPrime = (num) => {
  if (num <= 1) {
      return 'no';
    }

  if (num === 2) {
    return 'yes';
  }

  for (let i = 2; i < num; i += 1) {
      return num % i === 0 ? 'no' : 'yes'
    }
};

export { genNumUnderTen, genNum, correctnessCheck, getExpression, findGCD, generateProgression, hideElement, isPrime };
