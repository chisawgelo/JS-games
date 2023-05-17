'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);

   //коли нічого нема в інпуті
   if (!guess) {
      displayMessage('⛔ No number');

      // коли гравець виграв   
   } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
      }

      // коли число вище загаданого
   } else if (guess > secretNumber) {
      if (score > 1) {
         displayMessage('📈 To high!');
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         displayMessage('🤡 you lost the game!');
         document.querySelector('.score').textContent = 0;
      }

      // коли число нижче   
   } else if (guess < secretNumber) {
      if (score > 1) {
         displayMessage('📉 To low!');
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         displayMessage('🤡 you lost the game!');
         document.querySelector('.score').textContent = 0;
      }
   }
});

// Розпочати гру заново 
document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   displayMessage('Start guessing...');
   document.querySelector('.score').textContent = 20;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
});