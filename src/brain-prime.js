import readlineSync from 'readline-sync';

const isPrime = (num) => {
    if (num <= 1) {
      return 'no';
    }

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      } else {
        return 'yes';
      };
    };
}

const playPrimeGame = () => {
  
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?')
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);

  let correctAnswers = 0;

  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)

  while (correctAnswers < 3) {
    const num = Math.floor((Math.random() * 10) + 1);
    const correctAnswer = isPrime(num);

    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `).toLowerCase();

    if (answer === correctAnswer) {
      console.log(`Correct!`);
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}`);
    }
  };
};

export default playPrimeGame;
