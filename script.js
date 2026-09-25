

function getComputerChoice() {
    let randomNumber = Math.random();

    if(randomNumber < (1/3)){
        return "rock";
    } else if( randomNumber < (2/3)){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let result = prompt("Rock, paper or scissors?");
    return result;
}



function playGame(){
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === "rock")
        {
            if(computerChoice === "paper")
            {
                computerScore += 1;
                console.log("You lose! " + "Computer chose " + computerChoice);
            }else if(computerChoice === "scissors"){
                humanScore += 1;
                console.log("You win! " + "Computer chose " + computerChoice);
            }else {
                console.log("Draw! "  + "Computer chose " + computerChoice);
            }
        }else if(humanChoice === "paper")
        {
            if(computerChoice === "scissors")
            {
                computerScore += 1;
                console.log("You lose! " + "Computer chose " + computerChoice);
            }else if(computerChoice === "rock"){
                humanScore += 1;
                console.log("You win! " + "Computer chose " + computerChoice);
            }else {
                console.log("Draw! " + "Computer chose " + computerChoice);
            }
        }else
        {
            if(computerChoice === "rock")
            {
                computerScore += 1;
                console.log("You lose! " + "Computer chose " + computerChoice);
            }else if(computerChoice === "paper"){
                humanScore += 1;
                console.log("You win! " + "Computer chose " + computerChoice);
            }else {
                console.log("Draw! " + "Computer chose " + computerChoice);
            }
        }

    }
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;
    while(i < 5)
    {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }

    if(humanScore > computerScore){
        console.log("Human win!");
    } else if(computerScore > humanScore){
        console.log("Computer win!");
    } else {
        console.log("Draw");
    }
}

playGame();
