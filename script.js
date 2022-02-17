/* script.js */

alert('Rock, paper, scissors! Best of five!');

function computerPlay() {

    let random = Math.floor(Math.random() * 100); // make determinator random
    let text = '';

    if (random > 66) {
        let computerSelection = text.replace('', 'rock');
        return computerSelection;
    } else if (random > 33) {
        let computerSelection = text.replace('', 'paper');
        return computerSelection;
    } else {
        let computerSelection = text.replace('', 'scissors');
        return computerSelection;
    }

}

function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === 'rock') && (computerSelection === 'rock')) {
        return 'Rock and rock, it\'s a tie!';
    } else if ( (playerSelection === 'rock') && (computerSelection === 'paper')) {
        return 'Paper beats rock, you lose!';
    } else if ( (playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return 'Rock beats scissors, you win!';
    } else if ( (playerSelection === 'paper') && (computerSelection === 'rock')) {
        return 'Paper beats rock, you win!';
    } else if ( (playerSelection === 'paper') && (computerSelection === 'paper')) {
        return 'Paper against paper, it\'s a tie!';
    } else if ( (playerSelection === 'paper') && (computerSelection === 'scissors')) {
        return 'Scissors beats paper, you lose!';
    } else if ( (playerSelection === 'scissors') && (computerSelection === 'rock')) {
        return 'Rock beats scissors, you lose!';
    } else if ( (playerSelection === 'scissors') && (computerSelection === 'paper')) {
        return 'Scissors beats paper, you win!';
    } else if ( (playerSelection === 'scissors') && (computerSelection === 'scissors')) {
        return 'Scissors versus scissors, it\'s a tie!';
    } else {
        return 'Please choose from rock, paper, or scissors.';
    }
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {

        let initPlayerSelection = prompt('Rock, paper, or scissors?');
        let playerSelection = initPlayerSelection.toLowerCase();
        let winlosetie = playRound(playerSelection, computerPlay());

        if (winlosetie.slice(-4) === 'win!') {
            playerScore++;
            console.log(`${winlosetie}` + ' The score is ' + `${playerScore}` + ' to ' + `${computerScore}` + '!')
        } else if (winlosetie.slice(-4) === 'tie!') {
            playerScore++, computerScore++;
            console.log(`${winlosetie}` + ' The score is ' + `${playerScore}` + ' to ' + `${computerScore}` + '!')
        } else {
            computerScore++;
            console.log(`${winlosetie}` + ' The score is ' + `${playerScore}` + ' to ' + `${computerScore}` + '!')
        }
    }

    if (playerScore > computerScore) {
        console.log('The score is ' + `${playerScore}` + ' to ' + `${computerScore}` + '! You win!');
    } else if (playerScore < computerScore) {
        console.log('The score is ' + `${playerScore}` + ' to ' + `${computerScore}` + '! You lose!');
    } else {
        console.log('The score is ' + `${playerScore}` + ' to ' + `${computerScore}` + '! It\'s a tie!');
    }

}

game();