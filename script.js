'use strict';

let playerScore = 0;
let computerScore = 0;
let result = true;

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
  playerChoice = prompt('Що обираєш? \n 🪨 Камінь ,✂️ ножиці чи 🧻 папір ?').toLowerCase();
  if (playerChoice != 'ножиці' && playerChoice != 'камінь' && playerChoice != 'папір') {
    alert('Щось незрозуміле');
    result = false;
  } else {
    console.log(`${playerChoice} - вибор ігрока`);
    result = true;
    return playerChoice;
  }
}

function playRound(playersSelected, computerPlay) {
  if (playersSelected == 'папір' && computerPlay == 'папір') {
    alert(`Ніхто не виграв! Зіграйте ще раз`);
    result = false;
  } else if (playersSelected == 'папір' && computerPlay == 'камінь') {
    playerScore += 1;
    alert(`🧔🏻‍♂️ Людина виграла цей раунд! Папір накриває камінь `);
    result = true;
  } else if (playersSelected == 'папір' && computerPlay == 'ножиці') {
    computerScore += 1;
    alert(`🤖 Штучний інтелект виграв! Ножиці ріжуть папір `);
    result = true;
    // second variant
  } else if (playersSelected == 'камінь' && computerPlay == 'папір') {
    computerScore += 1;
    alert(`🤖 Штучний інтелект виграв! Папір накриває камінь `);
    result = true;
  } else if (playersSelected == 'камінь' && computerPlay == 'камінь') {
    alert(`Ніхто не виграв! Зіграйте ще раз`);
    result = false;
  } else if (playersSelected == 'камінь' && computerPlay == 'ножиці') {
    playerScore += 1;
    alert(`🧔🏻‍♂️ Людина виграла цей раунд! Камінь бьє ножиці `);
    result = true;
    // third variant
  } else if (playersSelected == 'ножиці' && computerPlay == 'папір') {
    playerScore += 1;
    alert(`🧔🏻‍♂️ Людина виграла цей раунд! Ножиці ріжуть папір`);
    result = true;
  } else if (playersSelected == 'ножиці' && computerPlay == 'камінь') {
    computerScore += 1;
    alert(`🤖 Штучний інтелект виграв! Камінь бьє ножиці  `);
    result = true;
  } else if (playersSelected == 'ножиці' && computerPlay == 'ножиці') {
    alert(`Ніхто не виграв! Зіграйте ще раз`);
    result = false;
  }
}

function game() {
  let i = 1;
  while (i <= 3) {
    // console.log(playRound(playersSelected, computerPlay()));

    playRound(playersSelected(), computerPlay());
    if (result == true) {
      console.log(result);
      console.log(playerScore);
      console.log(computerScore);
      console.log(i);
      i++;
    }
  }
}

game();
if (playerScore == computerScore) {
  alert(`Нічья 🧔🏻‍♂️ 🤖 ${playerScore} - ${computerScore} `);
} else if (playerScore > computerScore) {
  alert(`🧔🏻‍♂️ Людина перемогла штучний інтелект з рахунком: ${playerScore} - ${computerScore} `);
} else {
  alert(`🤖 Штучний інтелект переміг людину з рахунком: ${computerScore} - ${playerScore} `);
}

// console.log(playersSelected());
