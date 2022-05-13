let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//chooses randomly the play for the computer

function computerPlay() {
    let elements = ['Rock', 'Paper', 'Scissors'];
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
}