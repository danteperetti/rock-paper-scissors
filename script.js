let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('div');
rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Nah bruh, something's fishy.";
    }
}

function playGame() {
    const player = this.id;
    const computer = getComputerChoice().toLowerCase();
    if (player === computer) {
        div.textContent = `It's a tie. You: ${playerScore} Computer: ${computerScore}`;
    } else if (player === "rock" && computer === "paper") {
        computerScore++;
        div.textContent = `You lose. Paper defeats rock. You: ${playerScore} Computer: ${computerScore}`;
    } else if (player === "rock" && computer === "scissors") {
        playerScore++;
        div.textContent = `You win! Rock defeats scissors! You: ${playerScore} Computer: ${computerScore}`;
    } else if (player === "paper" && computer === "rock") {
        playerScore++;
        div.textContent = `You win! Paper defeats rock! You: ${playerScore} Computer: ${computerScore}`;
    } else if (player === "paper" && computer === "scissors") {
        computerScore++;
        div.textContent = `You lose. Scissors defeats paper. You: ${playerScore} Computer: ${computerScore}`;
    } else if (player === "scissors" && computer === "rock") {
        computerScore++;
        div.textContent = `You lose. Rock defeats scissors. You: ${playerScore} Computer: ${computerScore}`;
    } else {
        playerScore++;
        div.textContent = `You win! Scissors defeats paper! You: ${playerScore} Computer: ${computerScore}`;
    }
    if (playerScore === 5) {
        div.textContent = `You are the winner! The final score is ${playerScore}-${computerScore}`;
        rock.removeEventListener('click', playGame);
        paper.removeEventListener('click', playGame);
        scissors.removeEventListener('click', playGame);
    } else if (computerScore === 5) {
        div.textContent = `You are the loser! The final score is ${computerScore}-${playerScore}`;
        rock.removeEventListener('click', playGame);
        paper.removeEventListener('click', playGame);
        scissors.removeEventListener('click', playGame);
    }
}