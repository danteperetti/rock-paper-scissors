// generate 3 random values for the computers' choices
// assign values to rock, paper, and scissors
// based on whichever value is generated, display a value
function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return console.log("Rock");
            break;
        case 1:
            return console.log("Paper");
            break;
        case 2:
            return console.log("Scissors");
            break;
        default:
            return console.log("Nah bruh, something's fishy.");
    }
}

// player inputs either rock, paper, or scissors
// a function takes that value and the getComputerChoice functions as arguments
// the two choices are compared and the winner is decided
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playGame(playerSelection, computerSelection) {

}