function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(e) {
    let playerChoice = e.target.id;
    let compChoice = getComputerChoice();
    console.log(playerChoice);
    if(playerChoice === compChoice) return 0;
    else if(playerChoice === 'rock' && compChoice === 'scissors' ||
    playerChoice === 'paper' && compChoice === 'rock' || 
    playerChoice === 'scissors' && compChoice === 'paper') return 1;
    else return -1;
}

function game() {
    let playerScore = 0, compScore = 0;
    for(let i = 0; i < 3; i++) {
        switch(playRound) {
            case 1: playerScore++; break;
            case -1: compScore++; break;
            case 0: break;
        }
    }
    console.log(`playerScore = ${playerScore} | compScore = ${compScore}`)
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playRound, true);
});

game();


/*
pseudo code
    - attach event listeners to buttons to play a round
    - playRound() => 
*/

