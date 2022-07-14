'use strict';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundCount = document.getElementById('round-count');

let playerChoice;
let playerScore = 0;
let computerScore = 0;
let result = true;

rock.addEventListener('click', function () {
  playerChoice = 'rock';
  console.log(playerChoice);

  gameCheck();
});
paper.addEventListener('click', function () {
  playerChoice = 'paper';
  console.log(playerChoice);
  playerRoundChoice.textContent;

  gameCheck();
});
scissors.addEventListener('click', function () {
  playerChoice = 'scissors';
  console.log(playerChoice);

  gameCheck();
});

// function playersSelected() {
//   playerChoice = prompt(
//     '🪨 Камінь ,✂️ ножиці чи 🧻 папір \n🤖 Гра до трьох перемог🧔🏻‍♂️\n       \nЩо обираєш ти? '
//   ).toLowerCase();
//   if (playerChoice != 'ножиці' && playerChoice != 'камінь' && playerChoice != 'папір') {
//     alert('Щось незрозуміле');
//     result = false;
//   } else {
//     console.log(`${playerChoice} - вибор ігрока`);
//     result = true;
//     return playerChoice;
//   }
// }

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    console.log('rock - компьютер');
    return 'rock';
  } else if (randomNumber === 2) {
    console.log('папір - компьютер');
    return 'paper';
  } else {
    console.log('scissors - компьютер');
    return 'scissors';
  }
}

function playRound(playerChoice, computerPlay) {
  if (playerChoice == 'paper' && computerPlay == 'paper') {
    alert(`Нічья 🧔🏻‍♂️ 🤖\nРахунок: ${computerScore} - ${playerScore} `);
    result = false;
  } else if (playerChoice == 'paper' && computerPlay == 'rock') {
    playerScore += 1;
    alert(`🧔🏻‍♂️ Людина виграла цей раунд! Папір накриває rock  \nРахунок: ${playerScore} - ${computerScore}`);
  } else if (playerChoice == 'paper' && computerPlay == 'scissors') {
    computerScore += 1;
    alert(`🤖 Штучний інтелект виграв! Ножиці ріжуть paper \nРахунок: ${computerScore} - ${playerScore};`);
    // second variant
  } else if (playerChoice == 'rock' && computerPlay == 'paper') {
    computerScore += 1;
    alert(`🤖 Штучний інтелект виграв! Папір накриває rock \nРахунок: ${computerScore} - ${playerScore}`);
  } else if (playerChoice == 'rock' && computerPlay == 'rock') {
    alert(`Нічья 🧔🏻‍♂️ 🤖\nРахунок: ${computerScore} - ${playerScore} `);
    result = false;
  } else if (playerChoice == 'rock' && computerPlay == 'scissors') {
    playerScore += 1;
    alert(`🧔🏻‍♂️ Людина виграла цей раунд! Камінь бьє scissors \nРахунок:${playerScore} - ${computerScore}  `);
    // third variant
  } else if (playerChoice == 'scissors' && computerPlay == 'paper') {
    playerScore += 1;
    alert(`🧔🏻‍♂️ Людина виграла цей раунд! Ножиці ріжуть paper \nРахунок: ${playerScore} - ${computerScore} `);
  } else if (playerChoice == 'scissors' && computerPlay == 'rock') {
    computerScore += 1;
    alert(`🤖 Штучний інтелект виграв! Камінь бьє scissors\nРахунок: ${computerScore} - ${playerScore}`);
  } else if (playerChoice == 'scissors' && computerPlay == 'scissors') {
    alert(`Нічья 🧔🏻‍♂️ 🤖\nРахунок: ${computerScore} - ${playerScore} `);
    result = false;
  }
}

function game() {
  // let i = 1;
  // while (playerScore < 3 && computerScore < 3) {
  // console.log(playRound(playersSelected, computerPlay()));
  result = true;
  playRound(playerChoice, computerPlay());
  if (result == true) {
    roundCount.textContent = `${playerScore} - ${computerScore}`;
    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
  }
}

// roundcheck
function gameCheck() {
  if (playerScore < 3 && computerScore < 3) {
    game();
  } else if (playerScore > computerScore) {
    console.log(`🧔🏻‍♂️ Людина перемогла штучний інтелект з рахунком: ${playerScore} - ${computerScore} `);
  } else {
    console.log(`🤖 Штучний інтелект переміг людину з рахунком: ${computerScore} - ${playerScore} `);
  }
}
