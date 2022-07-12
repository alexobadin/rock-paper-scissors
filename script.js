'use strict';

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randomNumber);
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else return 'scissors';
}
let playerSelection = 'paper';
let computerSelection = computerPlay();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'paper' && computerSelection == 'paper') {
    return `Ніхто не виграв! Зіграйте ще раз`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return `Виграв перший гравець! Папір накриває камінь `;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return `Виграв другій гравець! Ножиці ріжуть папір `;
  }
}

console.log(playRound(playerSelection, computerSelection));
