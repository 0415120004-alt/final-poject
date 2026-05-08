let secretNumber;
let numberOfGuesses;

function start() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    numberOfGuesses = 0;
    document.getElementById("guessCount").innerText = "Guesses: 0";
    document.getElementById("feedback").innerText = "";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    let playerGuess = document.getElementById("guessInput").value;
    numberOfGuesses = numberOfGuesses + 1;
    
    let feedbackElement = document.getElementById("feedback");
    let guessCountElement = document.getElementById("guessCount");
    
    guessCountElement.innerText = "Guesses: " + numberOfGuesses;

    if (playerGuess == secretNumber) {
        feedbackElement.innerText = "You won! It took you " + numberOfGuesses + " guesses!";
    }
    else if (playerGuess > secretNumber) {
        feedbackElement.innerText = "Too high! Try again.";
    }
    else {
        feedbackElement.innerText = "Too low! Try again.";
    }
}

start();

let submitButton = document.getElementById("submitGuess");
submitButton.addEventListener("click", checkGuess);

let playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", start);
