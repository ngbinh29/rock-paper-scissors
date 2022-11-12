// This programme will take player's choice as input 
// and let the computer randomly choose among options: rock, paper or scissors
// follow the rules of the game to decide who is the winner.

// main programme for the game
const CHOICES = ["rock", "paper", "scissors"];
// ask player how many rounds do he want to play
let rounds = parseInt(prompt("Enter how many rounds do you want to play: "));
game(rounds);

// main loop game function 
function game(rounds) {
    for (let i = 1; i <= rounds; i++) {
        // get player's choice
        let playerChoice = prompt(`Enter your selection for round ${i}:`).toLowerCase();
        console.log(`Player chooses ${playerChoice}`);

        let computerChoice = getComputerChoice();
        console.log(`Computer chooses ${computerChoice}`);

        // check who is the winner of current round
        let result = playRound(playerChoice, computerChoice);
        console.log(`Round ${i}\n` + result);
        // notify the result
        alert(result);
    }
}

// randomly choose the options
function getComputerChoice() {
            let randomIndex = Math.floor(Math.random() * 3);
            return CHOICES[randomIndex];
}

// function to check who is the winner each round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return ("Tie!")

    } else {
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                return ("You win! Rock beats Scissors");
            } else if (computerChoice === 'paper') {
                return ("You lose! Paper beats Rock")
            }

        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                return ("You win! Paper beats Rock")
            } else if (computerChoice === 'scissors') {
                return ("You lose! Scissors beats Paper")
            }

        } else if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                return ("You win! Scissors beats Paper")
            } else if (computerChoice === 'rock') {
                return ("You lose! Rock beats Scissors")
            }
        }
    }
}