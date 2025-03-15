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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();  // Make humanChoice case-insensitive (convert to lowercase)

    // Check for a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }

    // Winning conditions for the human player
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}
// const humanSelection = getHumanChoice();  // Ask for user input
// const computerSelection = getComputerChoice();  // Get a random choice

// console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`);
// playRound(humanSelection, computerSelection);

// Check updated scores
// console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);

function playGame() {
    humanScore = 0; // Reset scores at the start
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`); // Display round number
        
        const humanSelection = getHumanChoice();  // Ask for user input
        const computerSelection = getComputerChoice();  // Get a random computer choice

        console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        
        // Display current score after each round
        console.log(`Score after Round ${i + 1}: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    // Announce the final winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();
