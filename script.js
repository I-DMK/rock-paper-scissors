let humanScore = 0;
let computerScore = 0;

//console.log("Human Score:", humanScore); // Test the variables
//console.log("Computer Score:", computerScore);

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice()); // Run multiple times to see random choices

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}
//console.log(getHumanChoice()); // Run multiple times to see if the output is lowercase
