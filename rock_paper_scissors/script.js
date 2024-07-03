//Variables to keep track of scores
let userScore = 0;
let computerScore = 0;

//Function to update score in .score div
function updateScore() {
    const scoreDiv = document.querySelector(".score");
    scoreDiv.textContent = `${computerScore}:${userScore}`;
}

//Function that returns a random integer from 1 to 3 inclusive.
//Return value represents computer's choice
//1 => Rock
//2 => Paper
//3 => Scissors
function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let choice = Math.floor(Math.random() * 3);
    return(options[choice]);
}

//Function that prompts user for their choice.
function getUserChoice() {
    let choice = prompt("Make your choice", "Rock / Paper / Scissors");
    return choice;
}

//Function to play a single round.
//Takes in user choice by calling getUserChoice
//Get computer's choice by calling getComputerChoice
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toUpperCase();
    //Announce computer's choice
    console.log("Computer's choice: " + computerChoice);
    //Announce user's choice
    console.log("Your choice: " + userChoice);
    //Output result of round in console
    if (userChoice === computerChoice) {
        console.log("Its a tie!");
    } else if (userChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            console.log("You lose! Paper beats Rock!");
            computerScore += 1;
        } else {
            console.log("You win! Rock beats Scissors!");
            userScore += 1;
        }
    } else if (userChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            console.log("You win! Paper beats Rock!");
            userScore += 1;
        } else {
            console.log("You lose! Scissors beats Paper!");
            computerScore += 1;
        }
    } else if (userChoice === "SCISSORS") {
        if (computerChoice === "PAPER") {
            console.log("You win! Scissors beats Paper!");
            userScore += 1;
        } else {
            console.log("You lose! Rock beats Scissors!");
            computerScore += 1;
        }
    }
    //Output scores in console
    console.log("Your score: " + userScore + " | Computer score: " + computerScore);
}