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

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

function playGame() {
    let humanScore = 0; // Moved inside playGame
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
            return;
        }

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

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`); // Display round number
        
        const humanSelection = getHumanChoice();  
        const computerSelection = getComputerChoice();  

        console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        
        console.log(`Score after Round ${i + 1}: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();
