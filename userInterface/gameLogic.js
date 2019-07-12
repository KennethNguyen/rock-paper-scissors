
// This function returns a randomized computer move of rock, paper, or scissors
function computerPlay() {
    var compMove = Array('Rock','Paper','Scissors')
    return compMove[Math.floor(Math.random()*compMove.length)]
}

var playerScore = 0
var computerScore = 0

// This function plays one round and compares the player's move to the computer's move
function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toUpperCase()
    var computer = computerSelection.toUpperCase()

    const rock = "ROCK"
    const paper = "PAPER"
    const scissors = "SCISSORS"

    var win = ("You win! " + playerSelection + " beats " + computerSelection)
    var lose = ("You lose! " + computerSelection + " beats " + playerSelection)

    if (player === computer) {
        return ("It's a tie!")
    }
    else if ((player == rock && computer == paper) || (player == paper && computer == scissors) || (player == scissors && computer == rock)) {
        computerScore++
        return lose
    }
    else { //if ((player == rock && computer == scissors) || (player == paper && computer == rock) || (player == scissors && computer == paper))
        playerScore++
        return win
    }
}

// ------------------------------------------------------------------------------------
function rockFunction() {
    var playerSelection = 'Rock'
    var computerSelection = computerPlay()
    resultsContainer.textContent = playRound(playerSelection, computerSelection)
    currentScore.textContent = updateScore()

}

function paperFunction() {
    var playerSelection = 'Paper'
    var computerSelection = computerPlay()
    resultsContainer.textContent = playRound(playerSelection, computerSelection)
    currentScore.textContent = updateScore()
}

function scissorFunction() {
    var playerSelection = 'Scissors'
    var computerSelection = computerPlay()
    resultsContainer.textContent = playRound(playerSelection, computerSelection)
    currentScore.textContent = updateScore()
}

var rockBtn = document.querySelector('#rockID')
rockBtn.addEventListener('click', rockFunction)

var paperBtn = document.querySelector('#paperID')
paperBtn.addEventListener('click', paperFunction)

var scissorBtn = document.querySelector('#scissorID')
scissorBtn.addEventListener('click', scissorFunction)

const displayResults = document.querySelector('.displayResults')
const resultsContainer = document.createElement('div')
resultsContainer.classList.add('resultsContainer')

displayResults.appendChild(resultsContainer)

// --------------------------------------------------------------------------------------
function updateScore() {
    if (playerScore == 5) {
        const playerWin = document.createElement('div')
        playerWin.classList.add('playerWin')
        playerWin.textContent = "Game Over! You win!"
        displayResults.appendChild(playerWin)
        restartGame()
    }
    if (computerScore == 5) {
        const computerWin = document.createElement('div')
        computerWin.classList.add('computerWin')
        computerWin.textContent = "Game Over! Computer wins!"
        displayResults.appendChild(computerWin)
        restartGame()
    }

    return (playerScore + "-" + computerScore)
}

const currentScore = document.createElement('div')
currentScore.classList.add('currentScore')

displayResults.appendChild(currentScore)

// -------------------------------------------------------------------------------------
function restartGame() {
    const restartGame = document.querySelector('.restartGame')
    const restartPrompt = document.createElement('div')
    restartPrompt.textContent = "Do you want to play again?"

    restartGame.appendChild(restartPrompt)

    const restartButton = document.createElement('button')
    restartButton.id = "restartID"
    restartButton.innerHTML = "Restart"
    restartButton.addEventListener('click', setRestart)

    restartGame.appendChild(restartButton)
}

function setRestart() {
    playerScore = 0
    computerScore = 0
}
