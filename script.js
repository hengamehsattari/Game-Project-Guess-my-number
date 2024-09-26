'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage(`⛔ No number`);
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct answer`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ` 📈 too high` : ` 📉 too low`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💥 You lost the game`);
    }
  }
});

//do the game again
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('🤔 Start Guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
