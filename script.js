let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < (1/3)) {
        return "rock";
    } else if (randomNumber < (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1;
            resultsDiv.textContent = "You lose! " + "Computer chose " + computerChoice;
        } else if (computerChoice === "scissors") {
            humanScore += 1;
            resultsDiv.textContent = "You win! " + "Computer chose " + computerChoice;
        } else {
            resultsDiv.textContent = "Draw! " + "Computer chose " + computerChoice;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore += 1;
            resultsDiv.textContent = "You lose! " + "Computer chose " + computerChoice;
        } else if (computerChoice === "rock") {
            humanScore += 1;
            resultsDiv.textContent = "You win! " + "Computer chose " + computerChoice;
        } else {
            resultsDiv.textContent = "Draw! " + "Computer chose " + computerChoice;
        }
    } else {
        if (computerChoice === "rock") {
            computerScore += 1;
            resultsDiv.textContent = "You lose! " + "Computer chose " + computerChoice;
        } else if (computerChoice === "paper") {
            humanScore += 1;
            resultsDiv.textContent = "You win! " + "Computer chose " + computerChoice;
        } else {
            resultsDiv.textContent = "Draw! " + "Computer chose " + computerChoice;
        }
    }

    scoreDiv.textContent = "You: " + humanScore + " | Computer: " + computerScore;

    if(humanScore === 5){
        resultsDiv.textContent = "Human win";
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore === 5){
        resultsDiv.textContent = "Computer win";
        humanScore = 0;
        computerScore = 0;
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));