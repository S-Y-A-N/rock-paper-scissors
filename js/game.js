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
    if(playerSelection.toLowerCase() == computerSelection) return 0;
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'
         || playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'
         || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') return 1;
    else return -1;
}

// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection)); Working

function game(rounds = 5) {
    rounds = prompt("How many rounds do you want to play?", 5);
    let count = 0, playerScore = 0, computerScore = 0, playerSelection = '';
    while(count < rounds && playerSelection !== null) {
        count++;
        playerSelection = prompt('Choose Rock, Paper, or Scissors:', 'rock');
        if(playerSelection === null) break;
        let computerSelection = getComputerChoice();
        switch(playRound(playerSelection, computerSelection)) {
            case 1: playerScore++; break;
            case -1: computerScore++; break;
            case 0: break;
        }
    }
    console.log(`Game Over!\n
    Your Score: ${playerScore}\n
    Computer Score: ${computerScore}`);
    if(playerScore > computerScore) return 'You Won!';
    else if(playerScore < computerScore) return 'The Computer Won!';
    else return 'It\'s a Tie!';
}

console.log(game());