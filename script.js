//Ehan Zhong Period 7-8 even 11/22/22 CodeBreaker
var playerGuess = "";
var correctGuess = "";
var guessesLeft = 7;
const higher = " -  Higher";
const lower = " - Lower";
const correct = " - Correct"
const gameOver = " - Game Over. The correct code was "
function initialize() {
    playerGuessDisplay = document.getElementById("playerGuess");
    playerLog = document.getElementById("history");
    playerGuessesLeftDisplay = document.getElementById("left");

    newNumber();
}

function newNumber() {
    let number1 = Math.floor((Math.random() * 3) + 1);
    number1 = number1.toString();
    let number2 = Math.floor((Math.random() * 3) + 1);
    number2 = number2.toString();
    let number3 = Math.floor((Math.random() * 3) + 1);
    number3 =  number3.toString();

    correctGuess = number1 + number2 + number3;
}

function guessOne() {
    playerGuess += "1";
    display();
}
function guessTwo() {
    playerGuess += "2";
    display();
}
function guessThree() {
    playerGuess += "3";
    display();
}
function display() {
    playerGuessDisplay.innerHTML = playerGuess;
    if (playerGuess.length < 3) {
        for (let i = playerGuess.length; i < 3; i++) {
            playerGuessDisplay.innerHTML += "_";
        }
    } else {
        testGuess();
        playerGuess = "";
        display();
    }
}
function testGuess() {
    guessesLeft--;
    if (playerGuess === correctGuess) {
        playerLog.innerHTML += playerGuess + correct;
        guessesLeft = 7;
        newNumber();
    } else if (parseInt(playerGuess) > parseInt(correctGuess)) {
        if (guessesLeft < 1) {
            playerLog.innerHTML += playerGuess + gameOver + correctGuess;
            guessesLeft = 7;
            createNumber();
        } else {
            playerLog.innerHTML += playerGuess + lower;
        }
    } else {
        if (guessesLeft < 1) {
            playerLog.innerHTML += playerGuess + gameOver + correctGuess;
            guessesLeft = 7;
            createNumber();
        } else {
            playerLog.innerHTML += playerGuess + higher;
        }
    }
    playerGuessesLeftDisplay.innerHTML = "Guesses Left: " + guessesLeft;
    playerLog.innerHTML += "<br>";
}
function resetAll() {
    playerGuess = "";
    display();
}
