
        // This function returns a randomized computer move of rock, paper, or scissors
        function computerPlay() {
            var compMove = Array('Rock','Paper','Scissors')
            return compMove[Math.floor(Math.random()*compMove.length)]
        }

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
            else if (player == rock && computer == paper) {
                computerScore++
                return lose
            }
            else if (player == rock && computer == scissors) {
                playerScore++
                return win
            }
            else if (player == paper && computer == scissors) {
                computerScore++
                return lose
            }
            else if (player == paper && computer == rock) {
                playerScore++
                return win
            }
            else if (player == scissors && computer == rock) {
                computerScore++
                return lose
            }
            else { //if (player == scissors && computer == paper)
                playerScore++
                return win
            }
        }

        var playerScore = 0
        var computerScore = 0
        var currentRound = 1

        const displayResults = document.querySelector('#displayResults')
        const resultsContainer = document.createElement('div')
        resultsContainer.classList.add('resultsContainer')

        function rockFunction() {
            var playerSelection = 'rock'
            var computerSelection = computerPlay()
            resultsContainer.textContent = playRound(playerSelection, computerSelection)

        }

        function paperFunction() {
            var playerSelection = 'paper'
            var computerSelection = computerPlay()
            resultsContainer.textContent = playRound(playerSelection, computerSelection)
        }

        function scissorFunction() {
            var playerSelection = 'scissor'
            var computerSelection = computerPlay()
            resultsContainer.textContent = playRound(playerSelection, computerSelection)
        }

        var rockBtn = document.querySelector('#rockID')
        rockBtn.addEventListener('click', rockFunction)

        var paperBtn = document.querySelector('#paperID')
        paperBtn.addEventListener('click', paperFunction)

        var scissorBtn = document.querySelector('#scissorID')
        scissorBtn.addEventListener('click', scissorFunction)

        displayResults.appendChild(resultsContainer)

/* ---------------------------------------------------------------------------------------

        // This function plays five rounds and keeps score
        function game() {
            for(i = 0; i < 5; i++) {
                //console.log("Round " + currentRound)
                var computerSelection = computerPlay()
                let userInput = prompt("Rock, paper, or scissors?")
                var playerSelection = userInput
                console.log("Round " + currentRound)
                console.log(playRound(playerSelection, computerSelection))
                console.log("The current score is " + playerScore + "-" + computerScore)
                currentRound++
            }
            if (playerScore > computerScore) {
                console.log("You, the player, win!")
            }
            else if (playerScore < computerScore) {
                console.log("The computer wins!")
            }
            else {
                console.log("It's a tie!")
            }
            // Reset the counters for a new game (if restart is implemented)
            playerScore = 0
            computerScore = 0
            currentRound = 1

            restartGame()
        }

        // Function that prompts the user if they want to play another game of rock-paper-scissors
        function restartGame() {
            let restart = prompt("Play another game?(y/n)")
            if (restart == 'y') {
                game()
            }
            else if (restart == 'n') {
                return
            }
            else {
                console.log("Please enter y or n")
                restartGame()
            }
        }
   ---------------------------------------------------------------------------------------- */
