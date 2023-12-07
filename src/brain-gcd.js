import readlineSync from 'readline-sync';


const playGCDGame = () => {
  
  console.log(`Welcome to the Brain Games!`);
  console.log(`May I have your name?`)
  const userName = readlineSync.question(`Your answer: `);
  console.log(`Hello, ${userName}!`);

  let correctAnswers = 0;

  console.log(`Find the greatest common divisor of given numbers.`)
  while (correctAnswers < 3) {
    const num1 = Math.floor((Math.random() * 10) + 1);
    const num2 = Math.floor((Math.random() * 10) + 1);
    
    const findGCD = (a, b) => {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
    const result = findGCD(num1, num2);

    console.log(`Question: ${num1} and ${num2}`);
    const answer = Number(readlineSync.question(`Your answer: `));

    if (answer === result) {
      console.log(`Correct!`);
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}`);
      return
    }
  };
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

export default playGCDGame;
