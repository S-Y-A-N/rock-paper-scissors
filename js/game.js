// Game Logic

let playerScore = 0;
let compScore = 0;
let roundResult = '';

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
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
    switch (playerChoice) {
        case 'rock':
            playerChoiceIcon.src = "images/rock.png";
            playerScoreTitle.textContent = `Player: ${playerScore}`;
            break;
        case 'paper':
            playerChoiceIcon.src = "images/paper.png";
            playerScoreTitle.textContent = `Player: ${playerScore}`;
            break;
        case 'scissors':
            playerChoiceIcon.src = "images/scissors.png";
            playerScoreTitle.textContent = `Player: ${playerScore}`;
            break;
    }

    switch (compChoice) {
        case 'rock':
            compChoiceIcon.src = "images/rock.png";
            compScoreTitle.textContent = `Computer: ${compScore}`;
            break;
        case 'paper':
            compChoiceIcon.src = "images/paper.png";
            compScoreTitle.textContent = `Computer: ${compScore}`;
            break;
        case 'scissors':
            compChoiceIcon.src = "images/scissors.png";
            compScoreTitle.textContent = `Computer: ${compScore}`;
            break;
    }
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

const gameResult = document.getElementById('gameResult')
const scoreboard = document.querySelector('.score');
const endgame = document.querySelector('.endgame');
const restartBtn = document.querySelector('.restart-button');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame)

function handleClick(playerChoice) {
    scoreboard.classList.remove('hidden');
    let compChoice = getComputerChoice();
    playRound(playerChoice, compChoice);
    switch (roundResult) {
        case 'tie':
            resultTitle.textContent = "This round was a Tie!";
            resultDesc.textContent = '';
            break;
        case 'player':
            resultTitle.textContent = "You won this round!";
            resultDesc.textContent = `${playerChoice} beats ${compChoice}`;
            break;
        case 'comp':
            resultTitle.textContent = "You lost this round!";
            resultDesc.textContent = `${compChoice} beats ${playerChoice}`;
            break;
    }
    updateScoreboard(playerChoice, compChoice);

    endGame(5);
}

function endResult() {
    if (playerScore > compScore) {
        gameResult.innerHTML = "— You <strong>Won</strong> the Game —";
    } else {
        gameResult.innerHTML = "— You <strong>Lost</strong> the Game —";
    }
}

function endGame(maxRounds) {
    if (compScore === maxRounds || playerScore === maxRounds) {
        endResult();
        compScore = 0;
        playerScore = 0;
        rockBtn.classList.add('button-disabled');
        paperBtn.classList.add('button-disabled');
        scissorsBtn.classList.add('button-disabled');
        endgame.classList.remove('hidden');
    }
}

function restartGame() {
    console.log('in restartGame');
    rockBtn.classList.remove('button-disabled');
    paperBtn.classList.remove('button-disabled');
    scissorsBtn.classList.remove('button-disabled');
    endgame.classList.add('hidden');
    scoreboard.classList.add('hidden');
}

