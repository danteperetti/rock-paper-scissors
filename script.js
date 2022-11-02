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
const playerSelection = "rock";
const computerSelection = getComputerChoice();

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
    for (let i = 0; i < 5; i++) {
        playGame(playerSelection, computerSelection);
        // find a place to insert the increment variable
        // insert a conditional statement to keep score

    }
}

console.log(game());