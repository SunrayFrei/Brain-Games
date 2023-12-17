const genNumUnderTen = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const genNum = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const checkCorrectness = (playersAnswer, correctAnswer, playerName) => {
  if (playersAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

export { genNumUnderTen, genNum, checkCorrectness };
