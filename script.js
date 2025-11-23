function playGame() {

    let resultText = "";
    let userWon = false;

     for (let i = 0; i < 3; i++) {

        if (userWon) break;  // stop early if user wins

        let userChoice = prompt("Enter rock, paper, or scissors:");
        if (!userChoice) continue;

        userChoice = userChoice.toLowerCase();

        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            resultText += "Invalid choice.\n";
            continue;
        }

        let computerChoice = getComputerChoice();
        let outcome = getResult(userChoice, computerChoice);

        if (outcome.includes("You win")) {
            userWon = true;
        }

        resultText += `You: ${userChoice}, Computer: ${computerChoice} → ${outcome}\n`;
    }

    document.getElementById("result").textContent = resultMessage;
}


// Generate computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


// Determine winner using IF statements
function getResult(user, computer) {

    if (user === computer) {
        return "It's a draw!";
    }

    if (user === "rock") {
        if (computer === "scissors") 
            return "Rock crushes scissors — You win!";
        else return "Paper covers rock — You lose!";
    }

    if (user === "paper") {
        if (computer === "rock") 
            return "Paper covers rock — You win!";
        else return "Scissors cut paper — You lose!";
    }

    if (user === "scissors") {
        if (computer === "paper") 
            return "Scissors cut paper — You win!";
        else return "Rock crushes scissors — You lose!";
    }
}
