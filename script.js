function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
        
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    const playerInput = prompt("type in either rock, paper or scissors").toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        console.log("Player choice is valid:", playerInput);
        return playerInput;
    } else {
        console.log("Invalid choice. Please enter either rock, paper, or scissors.");
        return null;
    }
}

const humanChoice = getHumanChoice
const computerChoice = getComputerChoice

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw. Please try again.");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("Congrats! You have won!");
    } else {
        console.log("You have lost :(");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection)

playRound(humanSelection, computerSelection);
