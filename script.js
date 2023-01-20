const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
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
        return "It's a tie.";
    } else if (player === "rock" && computer === "paper") {
        return "You lose. Paper defeats rock."
    } else if (player === "rock" && computer === "scissors") {
        return "You win! Rock defeats scissors!";
    } else if (player === "paper" && computer === "rock") {
        return "You win! Paper defeats rock!";
    } else if (player === "paper" && computer === "scissors") {
        return "You lose. Scissors defeats paper.";
    } else if (player === "scissors" && computer === "rock") {
        return "You lose. Rock defeats scissors.";
    } else {
        return "You win! Scissors defeats paper!";
    }
}

/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        playGame(playerSelection,computerSelection);

        if (playGame(playerSelection,computerSelection) === "It's a tie.") {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        } else if (playGame(playerSelection,computerSelection) === 
            "You lose. Paper defeats rock.") {
            computerScore++;
        } else if (playGame(playerSelection,computerSelection) === 
            "You lose. Rock defeats scissors.") {
            computerScore++;
        } else if (playGame(playerSelection,computerSelection) === 
            "You lose. Scissors defeats paper.") {
            computerScore++;
        } else if (playGame(playerSelection,computerSelection) === 
            "You win! Paper defeats rock!") {
            playerScore++;
        } else if (playGame(playerSelection,computerSelection) === 
            "You win! Rock defeats scissors!") {
            playerScore++;
        } else if (playGame(playerSelection,computerSelection) === 
            "You win! Scissors defeats paper!") {
            playerScore++;
        }

        console.log(playGame(playerSelection,computerSelection));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }

    if (playerScore >= 3) {
        console.log("Congrats! You are the winner!");
    } else if (computerScore >= 3) {
        console.log("You have been defeated by the computer.");
    } else {
        console.log("It's a tie.");
    }
}*/