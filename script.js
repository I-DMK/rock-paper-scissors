const buttons = document.querySelectorAll("button");
const resultsDiv = document.getElementById("results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    } else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    }

    if (humanScore === 5) {
        resultsDiv.textContent += ` You won the game!`;
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent += ` Computer won the game!`;
        disableButtons();
    }
}


function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id));
});
