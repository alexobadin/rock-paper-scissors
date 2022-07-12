'use strict';

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  //   console.log(randomNumber);
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else return 'scissors';
}

function playerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  //   console.log(randomNumber);
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else return 'scissors';
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'paper' && computerSelection == 'paper') {
    return `Ніхто не виграв! Зіграйте ще раз`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerSore += 1;
    return `Виграв перший гравець! Папір накриває камінь `;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore += 1;
    return `Виграв штучний інтелект! Ножиці ріжуть папір `;
    // second variant
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore += 1;
    return `Виграв штучний інтелект! Папір накриває камінь `;
  } else if (playerSelection == 'rock' && computerSelection == 'rock') {
    return `Ніхто не виграв! Зіграйте ще раз`;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerSore += 1;
    return `Виграв перший гравець! Камінь бьє ножиці `;
    // third variant
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerSore += 1;
    return `Виграв перший гравець! Ножиці ріжуть папір`;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore += 1;
    return `Виграв штучний інтелект! Камінь бьє ножиці  `;
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors')
    return `Ніхто не виграв! Зіграйте ще раз`;
}

// console.log(playRound(playerSelection, computerSelection));

let playerSelection;
let computerSelection;

let playerSore = 0;
let computerScore = 0;

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(playerPlay(), computerPlay()));
  }

  if (playerSore == computerScore) {
    console.log('Перемогла дружба');
  } else if (playerSore > computerScore) {
    console.log('Перемог Гравець 😎');
  } else {
    console.log('Перемог штучний інтелект 🤖');
  }
}

game();
