'use strict';

let playerScore = 0;
let computerScore = 0;

const result = document.getElementById('result');

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  //   console.log(randomNumber);
  if (randomNumber === 1) {
    return 'камінь';
  } else if (randomNumber === 2) {
    return 'папір';
  } else return 'ножиці';
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'папір' && computerSelection == 'папір') {
    return `Ніхто не виграв! Зіграйте ще раз`;
  } else if (playerSelection == 'папір' && computerSelection == 'камінь') {
    playerScore += 1;
    return `Виграв перший гравець! Папір накриває камінь `;
  } else if (playerSelection == 'папір' && computerSelection == 'ножиці') {
    computerScore += 1;
    return `Виграв штучний інтелект! Ножиці ріжуть папір `;
    // second variant
  } else if (playerSelection == 'камінь' && computerSelection == 'папір') {
    computerScore += 1;
    return `Виграв штучний інтелект! Папір накриває камінь `;
  } else if (playerSelection == 'камінь' && computerSelection == 'камінь') {
    return `Ніхто не виграв! Зіграйте ще раз`;
  } else if (playerSelection == 'камінь' && computerSelection == 'ножиці') {
    playerScore += 1;
    return `Виграв перший гравець! Камінь бьє ножиці `;
    // third variant
  } else if (playerSelection == 'ножиці' && computerSelection == 'папір') {
    playerScore += 1;
    return `Виграв перший гравець! Ножиці ріжуть папір`;
  } else if (playerSelection == 'ножиці' && computerSelection == 'камінь') {
    computerScore += 1;
    return `Виграв штучний інтелект! Камінь бьє ножиці  `;
  } else if (playerSelection == 'ножиці' && computerSelection == 'ножиці') {
    return `Ніхто не виграв! Зіграйте ще раз`;
  }
}

function playersSelected() {
  let playerSelection = prompt('Що обираєш? Камінь 🪨, ножиці ✂️ чи папір 🧻?');
  let loverSelect = playerSelection.toLocaleLowerCase();
  return loverSelect;
}

function game(playersSelected) {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(playersSelected, computerPlay()));
  }
  if (playerScore == 0 && computerScore == 0) {
    alert('Це точно не камінь, ножиці або папір🤨\nСпробуй ще раз!');
  } else if (playerScore == computerScore) {
    alert(` Перемогла дружба😎🤖 ${playerScore} - ${computerScore} `);
  } else if (playerScore > computerScore) {
    alert(` Перемог Гравець 😎 ${playerScore} - ${computerScore} `);
  } else {
    alert(` Перемог штучний інтелект 🤖 ${computerScore} - ${playerScore} `);
  }
}

game(playersSelected());
console.log(playerScore);
