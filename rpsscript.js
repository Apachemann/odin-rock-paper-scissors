function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var random = Math.floor((Math.random() * choices.length));
    var randomChoice = choices[random];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Draw! Rock ties with Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock";
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        return "Draw! Paper ties with Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper";
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw! Scissors ties with scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors";
    }  
}

function game() {
    // Play 5 rounds of RPS and determine a winner at the end
    for (let i = 0; i < 5; i++) {
        // Ask for the player's choice
        let playerChoice = prompt("Choose rock, paper, or scissors.");
        
        // Format the response to lower case
        playerChoice = playerChoice.toLowerCase();

        // Get the computer's choice
        let computerChoice = getComputerChoice();

        // Play a round
        let outcome = playRound(playerChoice, computerChoice);

        // Determine the round winner
        if (outcome.startsWith("You win!")) {
            // Increment your score
            playerScore += 1;

            // Output the results of the round
            console.log(outcome);
        } else if (outcome.startsWith("You lose!")) {
            // Increment the computer's score
            computerScore += 1;

            // Output the results of the round
            console.log(outcome);
        } else if (outcome.startsWith("Draw!")) {

            // Output the results of the round
            console.log(outcome);
        }
    }

    // Display the winner of the game
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > playerScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a draw!");
    }
}

var playerScore = 0;
var computerScore = 0;