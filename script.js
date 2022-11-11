// This programme will take player's choice as input 
// and let the computer randomly choose among options: rock, paper or scissors
// follow the rules of the game to decide who is the winner.

// main programme for the game
const CHOICES = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
console.log(`Computer chooses ${computerChoice}`);
// get player's choice
let playerChoice = prompt("Enter your selection: ").toLowerCase();
console.log(`Player chooses ${playerChoice}`);
// check who is the winner of current round
let result = playRound(playerChoice, computerChoice);
console.log(result);
// randomly choose the options
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
}

// function to check who is the winner each round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("Tie!")

    } else {
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                console.log("You win! Rock beats Scissors");
            } else if (computerChoice === 'paper') {
                console.log("You lose! Paper beats Rock")
            }

        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                console.log("You win! Paper beats Rock")
            } else if (computerChoice === 'scissors') {
                console.log("You lose! Scissors beats Paper")
            }

        } else if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                console.log("You win! Scissors beats Paper")
            } else if (computerChoice === 'rock') {
                console.log("You lose! Rock beats Scissors")
            }
        }
    }
}