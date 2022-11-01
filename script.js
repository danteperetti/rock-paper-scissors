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

    
}

playGame(playerSelection, computerSelection);