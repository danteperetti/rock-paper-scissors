// generate 3 random values for the computers' choices
// assign values to rock, paper, and scissors
// based on whichever value is generated, display a value
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

// player inputs either rock, paper, or scissors
// a function takes that value and the getComputerChoice functions as arguments
// the two choices are compared and the winner is decided
function playGame(playerSelection, computerSelection) {
    const lowerPlayer = playerSelection.toLowerCase();
    const lowerComputer = computerSelection.toLowerCase();

    if (lowerPlayer === lowerComputer) {
        return "It's a tie.";
    } else if (lowerPlayer === "rock" && lowerComputer === "paper") {
        return "You lose. Paper defeats rock."
    } else if (lowerPlayer === "rock" && lowerComputer === "scissors") {
        return "You win! Rock defeats scissors!";
    } else if (lowerPlayer === "paper" && lowerComputer === "rock") {
        return "You win! Paper defeats rock!";
    } else if (lowerPlayer === "paper" && lowerComputer === "scissors") {
        return "You lose. Scissors defeats paper.";
    } else if (lowerPlayer === "scissors" && lowerComputer === "rock") {
        return "You lose. Rock defeats scissors.";
    } else {
        return "You win! Scissors defeats paper!";
    }
}

// use a function to make the game best 3 out of 5
// create a function and call the playGame function 
// loop through the function 5 times
// every loop assign a point to the winner
// congratulate the winner after 5 games
function game() {
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
}

game();