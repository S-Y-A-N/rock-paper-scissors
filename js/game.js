function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) return 0;
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissors' && computerSelection === 'paper') return 1;
    else return -1;
}

function getPlayerChoice() {
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');

    switch(choice) {
        case rock: return 'rock';
        case paper: return 'paper';
        case scissors: return 'scissors';
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getPlayerChoice));

console.log();

// function game(rounds = 5) {
//     rounds = prompt("How many rounds do you want to play?", 5);
//     let count = 0, playerScore = 0, computerScore = 0, playerSelection = '';
//     while(count < rounds && playerSelection !== null) {
//         count++;
//         playerSelection = prompt('Choose Rock, Paper, or Scissors:', 'rock');
//         if(playerSelection === null) break;
//         let computerSelection = getComputerChoice();
//         switch(playRound(playerSelection, computerSelection)) {
//             case 1: playerScore++; break;
//             case -1: computerScore++; break;
//             case 0: break;
//         }
//     }
//     console.log(`Game Over!\n
//     Your Score: ${playerScore}\n
//     Computer Score: ${computerScore}`);
//     if(playerScore > computerScore) return 'You Won!';
//     else if(playerScore < computerScore) return 'The Computer Won!';
//     else return 'It\'s a Tie!';
// }

// console.log(game());