'use strict';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundCount = document.getElementById('round-count');
const playerRoundChoice = document.querySelector('.player-round-choice');
const playerQuestionsSymbol = document.querySelector('.player-questions-symbol');
const robotRoundChoice = document.querySelector('.robot-round-choice');
const robotQuestionsSymbol = document.querySelector('.robot-questions-symbol');
const roundMessage = document.querySelector('.round-message');
const restartBtn = document.getElementById('restart-btn');
const finalModal = document.querySelector('.final-modal');
const overlay = document.querySelector('.overlay ');
const closeModalBtn = document.querySelector('.close-modal');
const finalHeadline = document.querySelector('.final-headline');
const finalMessage = document.querySelector('.final-par');
const robotFinalImg = document.querySelector('.robot-final');

let playerChoice;
let playerScore = 0;
let computerScore = 0;
let result = true;

function rockChoiceGame() {
  playerChoice = 'rock';
  playerRoundChoice.src = '/img/rock.png';
  console.log(playerChoice);
  game();
}

function paperChoiceGame() {
  playerChoice = 'paper';
  playerRoundChoice.src = '/img/paper.png';
  console.log(playerChoice);
  game();
}

function scissorsChoiceGame() {
  playerChoice = 'scissors';
  playerRoundChoice.src = '/img/scissors.png';
  console.log(playerChoice);
  game();
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    console.log('rock - компьютер');
    robotRoundChoice.src = '/img/rock.png';
    return 'rock';
  } else if (randomNumber === 2) {
    robotRoundChoice.src = '/img/paper.png';
    console.log('paper - компьютер');
    return 'paper';
  } else {
    robotRoundChoice.src = '/img/scissors.png';
    console.log('scissors - компьютер');
    return 'scissors';
  }
}

function playRound(playerChoice, computerPlay) {
  if (playerChoice == 'paper' && computerPlay == 'paper') {
    roundMessage.textContent = `Нічья \nРахунок: ${computerScore} - ${playerScore} `;
    roundMessage.textContent = `НІЧИЯ! ТИ ЩО, РОБОТ? `;
    result = false;
  } else if (playerChoice == 'paper' && computerPlay == 'rock') {
    playerScore += 1;
    console.log(`🧔🏻‍♂️ Людина виграла цей раунд! Папір накриває rock  \nРахунок: ${playerScore} - ${computerScore}`);
    roundMessage.textContent = `ЛЮДИНА, ТОБІ ПОЩАСТИЛО! `;
  } else if (playerChoice == 'paper' && computerPlay == 'scissors') {
    computerScore += 1;
    console.log(`🤖 Штучний інтелект виграв! Ножиці ріжуть paper \nРахунок: ${computerScore} - ${playerScore};`);
    roundMessage.textContent = `ХАХА! ТРЕБА БУЛО КАМІНЬ ВИКИДАТИ!`;
    // second variant
  } else if (playerChoice == 'rock' && computerPlay == 'paper') {
    computerScore += 1;
    console.log(`🤖 Штучний інтелект виграв! Папір накриває rock \nРахунок: ${computerScore} - ${playerScore}`);
    roundMessage.textContent = `ПОГАНА ІДЕЯ З КАМНЕМ, ПОГАНА! `;
  } else if (playerChoice == 'rock' && computerPlay == 'rock') {
    console.log(`Нічья 🧔🏻‍♂️ 🤖\nРахунок: ${computerScore} - ${playerScore} `);
    roundMessage.textContent = `НІЧИЯ! ДАЮ ТОБІ ШАНС! `;
    result = false;
  } else if (playerChoice == 'rock' && computerPlay == 'scissors') {
    playerScore += 1;
    console.log(`🧔🏻‍♂️ Людина виграла цей раунд! Камінь бьє scissors \nРахунок:${playerScore} - ${computerScore}  `);
    roundMessage.textContent = `МЕНІ ПРОСТО ПОДОБАЮТЬСЯ НОЖИЦІ!`;
    // third variant
  } else if (playerChoice == 'scissors' && computerPlay == 'paper') {
    playerScore += 1;
    console.log(`🧔🏻‍♂️ Людина виграла цей раунд! Ножиці ріжуть paper \nРахунок: ${playerScore} - ${computerScore} `);
    roundMessage.textContent = `ЦЕ ТОЧНО ЗБІЙ У КОДІ!`;
  } else if (playerChoice == 'scissors' && computerPlay == 'rock') {
    computerScore += 1;
    console.log(`🤖 Штучний інтелект виграв! Камінь бьє scissors\nРахунок: ${computerScore} - ${playerScore}`);
    roundMessage.textContent = `ЦЕ Я НАВІТЬ НЕ НАМАГАВСЯ!`;
  } else if (playerChoice == 'scissors' && computerPlay == 'scissors') {
    console.log(`Нічья 🧔🏻‍♂️ 🤖\nРахунок: ${computerScore} - ${playerScore} `);
    roundMessage.textContent = `В НАСТУПНИЙ РАЗ ВИКИДУЙ КАМІНЬ!`;
    result = false;
  }
}

function game() {
  playerRoundChoice.classList.remove('show');
  playerQuestionsSymbol.classList.add('hide');
  robotRoundChoice.classList.remove('show');
  robotQuestionsSymbol.classList.add('hide');

  result = true;
  playRound(playerChoice, computerPlay());

  if (result == true) {
    roundCount.textContent = `${playerScore} - ${computerScore}`;
    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
  }
  if (playerScore == 3 || computerScore == 3) {
    rock.removeEventListener('click', rockChoiceGame);
    paper.removeEventListener('click', paperChoiceGame);
    scissors.removeEventListener('click', scissorsChoiceGame);
  }
  if (playerScore == 3) {
    finalHeadline.textContent = `ЛЮДИНА ПЕРЕМОГЛА!`;
    robotFinalImg.src = '/img/robot-fin-lose.gif';
    finalMessage.textContent = `НА ЦЕЙ РАЗ ТОБІ ПОЩАСТИЛО! АЛЕ ПАМ'ЯТАЙ, ЩО ТИ ВСЬОГО ЛИШЕ ЛЮДИНА!`;
    overlay.classList.remove('hidden');
    finalModal.classList.remove('hidden');
    console.log(`🧔🏻‍♂️ Людина перемогла штучний інтелект з рахунком: ${playerScore} - ${computerScore} `);
  } else if (computerScore == 3) {
    robotFinalImg.src = '/img/fin-robot-win.gif';
    finalHeadline.textContent = `РОБОТ ПЕРЕМІГ!`;
    finalMessage.textContent = `ХА-ХА-ХА! ТВОЯ ПОРАЗКА МЕНІ БУЛА ВІДОМА ЗАЗДАЛЕГІДЬ!`;
    overlay.classList.remove('hidden');
    finalModal.classList.remove('hidden');
    console.log(`🤖 Штучний інтелект переміг людину з рахунком: ${computerScore} - ${playerScore} `);
  }
}

function closeFunction() {
  overlay.classList.add('hidden');
  finalModal.classList.add('hidden');
}

function restartFunction() {
  rock.addEventListener('click', rockChoiceGame);
  paper.addEventListener('click', paperChoiceGame);
  scissors.addEventListener('click', scissorsChoiceGame);
  roundMessage.textContent = `ВІТАЮ, ЛЮДИНА! ДАВАЙ ЗІГРАЄМО!`;
  roundCount.textContent = `0  -  0`;
  playerScore = 0;
  computerScore = 0;
  result = true;
}

rock.addEventListener('click', rockChoiceGame);
scissors.addEventListener('click', scissorsChoiceGame);
paper.addEventListener('click', paperChoiceGame);

overlay.addEventListener('click', closeFunction);
closeModalBtn.addEventListener('click', closeFunction);
restartBtn.addEventListener('click', restartFunction);

// if (playerScore > computerScore) {
//   console.log(`🧔🏻‍♂️ Людина перемогла штучний інтелект з рахунком: ${playerScore} - ${computerScore} `);
// } else {
//   console.log(`🤖 Штучний інтелект переміг людину з рахунком: ${computerScore} - ${playerScore} `);
// }
