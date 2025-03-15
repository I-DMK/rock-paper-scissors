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

console.log(getComputerChoice()); // Run multiple times to see random choices

