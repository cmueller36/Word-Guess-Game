//declare the words for the computer to choose from 10 choices
var computerChoices = ["car", "plane", "train", "cloud", "road"];
var wordHint = ["I have 4 wheels", "I fly in the air", "I ride on rails", "I am in the blue sky", "I am black"];

var blankANDguessed = [];


//set variable sto 0 
var userWin = 0;
var userLoss = 0;
var remainingGuess = 15;
var userGuess = [];
var hint = "";




//computer chooses word
var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//computer breaks the word into an array
var arrComputerWord = computerWord.split("");




//function to begin game when hitting the Start button
function startGame() {
    //creates the number of _ _ _ based on the word length
    for (var i = 0; i < computerWord.length; i++) {
        blankANDguessed.push("_");
    };
    //finds the word hint corresponding to the word selected by the computer
    var hint = wordHint[computerChoices.indexOf(computerWord)];
    //displays the hint for the user
    var html1 =
        "<p> Hint: " + hint + "</p>";
    document.querySelector("#userHint").innerHTML = html1;
}





//begin game when user clicks button
startbutton.onclick = function (event) {
    //grabs the function from above
    startGame();
    document.querySelector("#game").innerHTML = blankANDguessed;
}

document.onkeyup = function (event) {
    //turn user guess to lower case and store in variable
    var userKeyGuess = event.key.toLowerCase();
    //push the user guess into the variable userGuess
    userGuess.push(userKeyGuess);
    //display the user guesses
    var html =
        "<p> You have chosen: " + userGuess + "</p>";
    document.querySelector("#guesses").innerHTML = html;

    //show the user how many lives they have left
    var mylives =
        "<p> Lives remaining: " + remainingGuess + "</p>";
    document.querySelector("#userLives").innerHTML = mylives;

    remainingGuess--;

    //check to see if word is computer word
    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord[i] == userKeyGuess) {
            var matchComputerWordIndex = computerWord.indexOf(userKeyGuess);
            blankANDguessed.splice(matchComputerWordIndex, 1, userKeyGuess);
            document.querySelector("#game").innerHTML = blankANDguessed;
        }
    };

}
