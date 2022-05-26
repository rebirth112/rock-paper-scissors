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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice === 'rock' && computerSelection === 'rock') {
        gameResults.innerText = (`It's a tie! ${playerChoice} and ${computerSelection} tie out!`)
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        gameResults.innerText = (`You lose! ${computerSelection} beats ${playerChoice}!`)
        computerScore = computerScore + 1
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        gameResults.innerText = (`You win! ${playerChoice} beats ${computerSelection}!`)
        playerScore = playerScore + 1
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        gameResults.innerText = (`You win! ${playerChoice} beats ${computerSelection}!`)
        playerScore = playerScore + 1
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'paper' && computerSelection === 'paper') {
        gameResults.innerText = (`It's a tie! ${playerChoice} and ${computerSelection} tie out!`)
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        gameResults.innerText = (`You lose! ${computerSelection} beats ${playerChoice}!`)
        computerScore = computerScore + 1
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        gameResults.innerText = (`You lose! ${computerSelection} beats ${playerChoice}!`)
        computerScore = computerScore + 1
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        gameResults.innerText = (`You win! ${playerChoice} beats ${computerSelection}!`)
        playerScore = playerScore + 1
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    } else if (playerChoice === 'scissors' && computerSelection === 'scissors') {
        gameResults.innerText = (`It's a tie! ${playerChoice} and ${computerSelection} tie out!`)
        totalScore.innerText = (`Your current score is ${playerScore}. The Computer's score is ${computerScore}`)
    }
}

var rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', selectRock);

var finalResults = document.createElement('h1');
finalResults.setAttribute('align', 'center');

function selectRock () {
    let playerSelection = 'rock';
    playRound(playerSelection, computerPlay());
    if (playerScore === 5) {
        finalResults.innerText = 'You Win! Refresh the page to play again!'
        document.body.appendChild(finalResults);
    } else if (computerScore === 5) {
        finalResults.innerText = 'You Lose! Refresh the page to play again!!'
        document.body.appendChild(finalResults);
    }
}

var paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', selectPaper);

function selectPaper () {
    let playerSelection = 'paper';
    playRound(playerSelection, computerPlay());
    if (playerScore === 5) {
        finalResults.innerText = 'You Win! Refresh the page to play again!'
        document.body.appendChild(finalResults);
    } else if (computerScore === 5) {
        finalResults.innerText = 'You Lose! Refresh the page to play again!'
        document.body.appendChild(finalResults);
    }

}

var scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', selectScissors);

function selectScissors () {
    let playerSelection = 'scissors';
    playRound(playerSelection, computerPlay());
    if (playerScore === 5) {
        finalResults.innerText = 'You Win! Refresh the page to play again!'
        document.body.appendChild(finalResults);
    } else if (computerScore === 5) {
        finalResults.innerText = 'You Lose! Refresh the page to play again!'
        document.body.appendChild(finalResults);
    }
}

var gameResults = document.createElement('div');
gameResults.setAttribute('align', 'center');
gameResults.style.fontWeight = 'bolder';
gameResults.style.fontSize = 'x-large';
document.body.appendChild(gameResults);

var totalScore = document.createElement('div');
totalScore.setAttribute('align', 'center');
totalScore.style.fontWeight = 'bolder';
totalScore.style.fontSize = 'x-large';
totalScore.innerText = ('The current score is 0-0. Choose your selection!')
document.body.appendChild(totalScore);

