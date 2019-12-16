
console.log('Start of code.js')

let answer = math.floor(Math,random() * 10)+1;
console.log('Answer is $(answer)');

function yourGuess() {
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("output");

    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}
    
function showNumberToGuess() {
    if (document.getElementById('cheat').checked) {
        document.getElementById('numberToGuess').value = numToGuess;
        document.getElementById('cheatShow').style.display = 'inline';
    } else {
        document.getElementById('numberToGuess').value = '';
        document.getElementById('cheatShow').style.display = 'none';
    }
}

var numToGuess = Math.floor(Math.random()*500);