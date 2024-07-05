function GetComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
        
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(GetComputerChoice());

function GetPlayerChoice() {
    const Playerinput = document.getElementById('vyber').value.toLowerCase();
    if (Playerinput === "rock" || Playerinput === "paper" || Playerinput === "scissors") {
        console.log("Player choice is valid", Playerinput);
    } else {
        console.log("Invalid choice. Please enter either rock, paper or scissors");
    }
}

