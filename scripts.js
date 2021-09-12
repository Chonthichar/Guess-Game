'use strict';


let secretNumber = Math.round(Math.random() * 10) +1;
let score = 20;
let high = 0;

const showMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        showMessage('No Number');
    } else if (guess === secretNumber) {
        // win
        showMessage('Correct message');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > high) {
            high = score;
            document.querySelector('.high').textContent = high;
        }
        // guess wrong number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            showMessage(`${guess > secretNumber ? 'Too high' : 'Too Low'}`)
            score--;
            document.querySelector('.score').textContent = score;
        } else {

            showMessage('You are loose');
            document.querySelector('.score').textContent = 0;
        }
    }
})
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.round(Math.random() * 10) + 1;
    document.querySelector('.guess').value = ' ';
    showMessage('Try again');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
})





