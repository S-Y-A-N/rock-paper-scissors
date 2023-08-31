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

function updateScoreboard(playerChoice, compChoice) {
    switch(playerChoice) {
        case 'rock':
            playerChoiceIcon.textContent = '🪨';
            playerScoreTitle.textContent = `Player: ${playerScore}`;
            break;
        case 'paper':
            playerChoiceIcon.textContent = '📃';
            playerScoreTitle.textContent = `Player: ${playerScore}`;
            break;
        case 'scissors':
            playerChoiceIcon.textContent = '✂️';
            playerScoreTitle.textContent = `Player: ${playerScore}`;
            break;
    }

    switch(compChoice) {
        case 'rock':
            compChoiceIcon.textContent = '🪨';
            compScoreTitle.textContent = `Computer: ${compScore}`;
            break;
        case 'paper':
            compChoiceIcon.textContent = '📃';
            compScoreTitle.textContent = `Computer: ${compScore}`;
            break;
        case 'scissors':
            compChoiceIcon.textContent = '✂️';
            compScoreTitle.textContent = `Computer: ${compScore}`;
            break;
    }
}

function isGameOver() {
    
}

// DOM Manipulation

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const resultTitle = document.getElementById('resultTitle');
const resultDesc = document.getElementById('resultDesc');

const playerChoiceIcon = document.getElementById('playerChoiceIcon');
const playerScoreTitle = document.getElementById('playerScoreTitle');
const compChoiceIcon = document.getElementById('compChoiceIcon');
const compScoreTitle = document.getElementById('compScoreTitle');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerChoice) {
    let compChoice = getComputerChoice();
    playRound(playerChoice, compChoice);
    switch(roundResult) {
        case 'tie':
            resultTitle.textContent = "This round was a Tie!";
            resultDesc.textContent = '';
            break;
        case 'player':
            resultTitle.textContent = "You won the round!";
            resultDesc.textContent = `${playerChoice} beats ${compChoice}`;
            break;
        case 'comp':
            resultTitle.textContent = "You lost the round!";
            resultDesc.textContent = `${compChoice} beats ${playerChoice}`;
            break;
    }
    updateScoreboard(playerChoice, compChoice);
}

/*
    - playRound(player, comp) [player from handle click function, comp from math function]
    - handleClick
    - showResult
    - isGameOver
*/

