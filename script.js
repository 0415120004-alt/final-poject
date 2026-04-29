function start(){
    let secretNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

function checkGuess() {
    let playerGuess = document.getElementById("guessInput").value;
    numberOfGuesses = numberOfGuesses + 1;
    
    if (playerGuess == secretNumber) {
        // Show "You won!" message
    } else if (playerGuess > secretNumber) {
        // Show "Too high!" message
    } else {
        // Show "Too low!" message
    }
}

}
document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();

// Your variables go here
let secretNumber = // use Math.random() to pick 1-100
let numberOfGuesses = // start at 0

// Function to check the guess
function checkGuess() {
    // Your code will go here
}

// Connect the button to the function
// Use addEventListener here
    }
});

