'use strict';

let playerScore = 0;
let computerScore = 0;

const result = document.getElementById('result');

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    console.log('камінь - компьютер');
    return 'камінь';
  } else if (randomNumber === 2) {
    console.log('папір - компьютер');
    return 'папір';
  } else {
    console.log('ножиці - компьютер');
    return 'ножиці';
  }
}
let playerChoice;
function playersSelected() {
  playerChoice = prompt('Що обираєш? Камінь 🪨, ножиці ✂️ чи папір 🧻?').toLowerCase();
  if (playerChoice != 'ножиці' && playerChoice != 'камінь' && playerChoice != 'папір') {
    alert('Щось незрозуміле');
  } else {
    console.log(`${playerChoice} - вибор ігрока`);
    return playerChoice;
  }
}

function playRound(playersSelected, computerPlay) {
  if (playersSelected == 'папір' && computerPlay == 'папір') {
    alert(`Ніхто не виграв! Зіграйте ще раз`);
  } else if (playersSelected == 'папір' && computerPlay == 'камінь') {
    playerScore += 1;
    alert(`😎 виграв! Папір накриває камінь `);
  } else if (playersSelected == 'папір' && computerPlay == 'ножиці') {
    computerScore += 1;
    alert(`🤖 виграв! Ножиці ріжуть папір `);
    // second variant
  } else if (playersSelected == 'камінь' && computerPlay == 'папір') {
    computerScore += 1;
    alert(`🤖 виграв! Папір накриває камінь `);
  } else if (playersSelected == 'камінь' && computerPlay == 'камінь') {
    alert(`Ніхто не виграв! Зіграйте ще раз`);
  } else if (playersSelected == 'камінь' && computerPlay == 'ножиці') {
    playerScore += 1;
    alert(`😎 виграв! Камінь бьє ножиці `);
    // third variant
  } else if (playersSelected == 'ножиці' && computerPlay == 'папір') {
    playerScore += 1;
    alert(`😎 виграв! Ножиці ріжуть папір`);
  } else if (playersSelected == 'ножиці' && computerPlay == 'камінь') {
    computerScore += 1;
    alert(`🤖 виграв! Камінь бьє ножиці  `);
  } else if (playersSelected == 'ножиці' && computerPlay == 'ножиці') {
    alert(`Ніхто не виграв! Зіграйте ще раз`);
  }
}

function game() {
  while(let i = 1; i <= 3; i++) {
    // console.log(playRound(playersSelected, computerPlay()));

    playRound(playersSelected(), computerPlay());

    console.log(playerScore);
    console.log(computerScore);
  }
}

game();
if (playerScore == computerScore) {
  alert(`Нічья😎🤖 ${playerScore} - ${computerScore} `);
} else if (playerScore > computerScore) {
  alert(`Перемог Гравець 😎 ${playerScore} - ${computerScore} `);
} else {
  alert(` Перемог штучний інтелект 🤖 ${computerScore} - ${playerScore} `);
}

// console.log(playersSelected());
