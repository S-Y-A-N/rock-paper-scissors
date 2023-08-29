// Game Logic

let playerScore = 0;
let compScore = 0;
let roundResult = '';

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        roundResult = 'tie';
    }
    else if (
    playerChoice === 'rock' && compChoice === 'scissors' ||
    playerChoice === 'paper' && compChoice === 'rock' || 
    playerChoice === 'scissors' && compChoice === 'paper') {
        playerScore++;
        roundResult = 'player';
    }
    else {
        compScore++;
        roundResult = 'comp';
    }
}

function isGameOver() {
    
}

// UI Logic

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultTitle = document.getElementById('resultTitle');
const resultDesc = document.getElementById('resultDesc');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerChoice) {
    let compChoice = getComputerChoice();
    playRound(playerChoice, compChoice);
    switch(roundResult) {
        case 'tie': resultTitle.textContent = "This round was a Tie!"; break;
        case 'player': resultTitle.textContent = "You won the round!"; break;
        case 'comp': resultTitle.textContent = "You lost the round!"; break;
    }
}

/*
    - playRound(player, comp) [player from handle click function, comp from math function]
    - handleClick
    - showResult
    - isGameOver
*/

