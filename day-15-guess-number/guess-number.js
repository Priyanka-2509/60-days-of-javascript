// Day 15 – Guess the Number Game

// Generate random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess;
let attempts = 0;

// Simulated user guesses
const userGuesses = [3, 7, 5, secretNumber];

for (let i = 0; i < userGuesses.length; i++) {
  guess = userGuesses[i];
  attempts++;

  if (guess < secretNumber) {
    console.log(`Guess ${guess}: Too low`);
  } else if (guess > secretNumber) {
    console.log(`Guess ${guess}: Too high`);
  } else {
    console.log(`Guess ${guess}: correct!`);
    console.log(`Guessed in ${attempts} attempts`);
    break;
  }
}
