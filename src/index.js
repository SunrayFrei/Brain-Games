import readlineSync from 'readline-sync';

const gameLogic = (description, roundOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const [condition, correctAnswer] = roundOfGame();
    console.log(`Question: ${condition}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;