function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return 'rock'
    } else if (computerChoice === 1) {
        return 'paper'
    } else if (computerChoice === 2) {
        return 'scissors'
    }
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice === 'rock' && computerSelection === 'rock') {
        console.log(`It's a tie! ${playerChoice} and ${computerSelection} tie out!`)
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}!`)
        computerScore = computerScore + 1
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerChoice} beats ${computerSelection}!`)
        playerScore = playerScore + 1
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log(`You win! ${playerChoice} beats ${computerSelection}!`)
        playerScore = playerScore + 1
    } else if (playerChoice === 'paper' && computerSelection === 'paper') {
        console.log(`It's a tie! ${playerChoice} and ${computerSelection} tie out!`)
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}!`)
        computerScore = computerScore + 1
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}!`)
        computerScore = computerScore + 1
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! ${playerChoice} beats ${computerSelection}!`)
        playerScore = playerScore + 1
    } else if (playerChoice === 'scissors' && computerSelection === 'scissors') {
        console.log(`It's a tie! ${playerChoice} and ${computerSelection} tie out!`)
    }
}

let playerScore = 0
let computerScore = 0

function game() {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i <5; i++) {
        let playerSelection = prompt('Enter your choice: Rock, Paper, Or Scissors?')
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        console.log(`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
        }
    }
    if (playerScore > computerScore) {
        console.log('You win the game!')
    } else if (playerScore < computerScore) {
        console.log('You lost!!!')
    }

game();
