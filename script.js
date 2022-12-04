// This programme will take player's choice as input 
// and let the computer randomly choose among options: rock, paper or scissors
// follow the rules of the game to decide who is the winner.

// main programme for the game
const CHOICES = ["rock", "paper", "scissors"];
const playerChoiceBtns = document.querySelectorAll('.player-btn');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const playerDisplay = document.querySelector('.left');
const computerDisplay = document.querySelector('.right');
const container = document.querySelector('.container');
const playerSection = document.querySelector('.player-section');


document.addEventListener('DOMContentLoaded', e => {
    playerChoiceBtns.forEach(btn => btn.addEventListener('click', startGame));
})



function startGame(e) {
    let playerChoice = this.textContent.toLowerCase();
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice);

    recordScore(roundResult);

    announceWinner();
}

function announceWinner() {
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        container.removeChild(playerSection);
        const finalResult = document.createElement('div');
        finalResult.textContent = playerScore.textContent == 5 ? "Player wins!" : "Computer wins!";
        finalResult.classList.add('final-output');
        const resetButton = document.createElement('button');
        resetButton.classList.add('restart');
        resetButton.textContent = "Restart";
        resetButton.addEventListener('click', () => {
            location.reload();
        })
        finalResult.appendChild(resetButton);
        container.appendChild(finalResult);
    }
}

function recordScore(roundResult) {
    if (roundResult === 1) {
        playerScore.textContent = parseInt(playerScore.textContent) + roundResult;
    } else if (roundResult === -1) {
        computerScore.textContent = parseInt(computerScore.textContent) - roundResult;
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
        return 0;

    } else {
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                return 1;
            } else if (computerChoice === 'paper') {
                return -1;
            }

        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                return 1;
            } else if (computerChoice === 'scissors') {
                return -1;
            }

        } else if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                return 1;
            } else if (computerChoice === 'rock') {
                return -1;
            }
        }
    }
}


// ask player how many rounds do he want to play


// main loop game function 
/* function game(rounds) {
    for (let i = 1; i <= rounds; i++) {
        // get player's choice
        let playerChoice = prompt(`Enter your selection for round ${i}:`).toLowerCase();
        console.log(`Player chooses ${playerChoice}`);

        
        console.log(`Computer chooses ${computerChoice}`);

        // check who is the winner of current round
        let result = playRound(playerChoice, computerChoice);
        console.log(`Round ${i}\n` + result);
        // notify the result
        alert(result);
    }
} */