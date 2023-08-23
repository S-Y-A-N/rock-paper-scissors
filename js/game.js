function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

// console.log(getComputerChoice()); Working

function playRound(playerSelection, computerSelection) {
    console.log(`You chose: ${playerSelection.toUpperCase()}`);
    console.log(`The computer chose: ${computerSelection.toUpperCase()}`);
    if(playerSelection.toLowerCase() == computerSelection) return 'It\'s a Tie!';
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'
         || playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'
         || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') return 'You Won! Congrats!';
    else return 'The Computer Won, Hard Luck!';
}

// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection)); Working