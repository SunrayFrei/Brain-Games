const genNumber = (min = 0, max = 100, n = 1) => Math.floor(Math.random() * max - min + n);

const checkCorrectness = (playersAnswer, correctAnswer, playerName) => {
  if (playersAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

export { genNumber, checkCorrectness };
