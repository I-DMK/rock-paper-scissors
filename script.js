// Select the buttons and the results display area
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
        resultsDiv.innerHTML = `It's a tie! Both chose ${humanChoice}.`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultsDiv.innerHTML = `You win! ${humanChoice} beats ${computerChoice}.<br>Score: Human ${humanScore} - Computer ${computerScore}`;
    } else {
        computerScore++;
        resultsDiv.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}.<br>Score: Human ${humanScore} - Computer ${computerScore}`;
    }

     // Check if someone reaches 5 points
    if (humanScore === 5) {
        resultsDiv.innerHTML += `<br><strong>You won the game! 🎉</strong>`;
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += `<br><strong>Computer won the game! 💻</strong>`;
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id));
});
