import readlineSync from 'readline-sync';


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

const progression = generateProgression();
console.log(typeof(progression));

const index = Math.floor(Math.random() * (progression.length - 1));
console.log(index);

const hideElement = (progression) => {
  let hiddenProgression = progression.slice();
  hiddenProgression[index] = '..';
  const arrToString = hiddenProgression.join(' ');
  return arrToString; 
}

const hiddenProgression = hideElement();

const playProgressionGame = () => {
  
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?')
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);

  let correctAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    console.log('What number is missing in the progression?');
    console.log(hiddenProgression);
    const answer = readlineSync.question('Your answer: ');
    if (answer === progression[index]) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${progression[index]}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  };
};

export default playProgressionGame;
