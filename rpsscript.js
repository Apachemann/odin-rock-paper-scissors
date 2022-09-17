function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var random = Math.floor((Math.random() * choices.length));
    var randomChoice = choices[random];
    return randomChoice;
}