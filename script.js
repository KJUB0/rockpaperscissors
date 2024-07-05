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
    choice = textField.addActionListener(this);
}