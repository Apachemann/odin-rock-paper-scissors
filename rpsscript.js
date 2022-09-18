function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var random = Math.floor((Math.random() * choices.length));
    var randomChoice = choices[random];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Draw! Rock ties with Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock");
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Draw! Paper ties with Paper");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper");
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Draw! Scissors ties with scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors");
    }  
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));