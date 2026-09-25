console.log("Hello, world")

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

console.log(getComputerChoice())
console.log(getHumanChoice())