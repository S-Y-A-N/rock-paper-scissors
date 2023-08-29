// Game Logic

let playerScore = 0, compScore = 0;
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
        roundResult = 'player'
    }
    else {
        compScore++;
        roundResult = 'comp'
    }
}


// UI Logic

const rockBtn = document.getElementById('#rock');
const paperBtn = document.getElementById('#paper');
const scissorsBtn = document.getElementById('#scissors');



/*
pseudo code
    - get player choice by handling click
*/

