//declare the words for the computer to choose from 10 choices
var computerChoices = ["car", "plane", "train", "cloud", "road"];
var wordHint =["I have 4 wheels","I fly in the air","I ride on rails","I am in the blue sky","I am black"];

var blankANDguessed = [];


//set variable sto 0 
var userWin = 0;
var userLoss = 0;
var remainingGuess = 15;
var userGuess = [];
var hint = "";




//computer chooses game and determines word length

var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var arrComputerWord = computerWord.split("");
console.log(computerWord);
console.log(arrComputerWord);



//function to populate ---- for words
function startGame() {
    for (var i = 0; i < computerWord.length; i++) {
        blankANDguessed.push("_");
    };

    var hint = wordHint[computerChoices.indexOf(computerWord)];
    var html1 = 
    "<p> Hint: "+ hint + "</p>";
    document.querySelector("#userHint").innerHTML = html1;
}





//begin game when user clicks button
startbutton.onclick = function (event) {
    startGame();
    document.querySelector("#game").innerHTML = blankANDguessed; 
}

document.onkeyup = function(event){
    //turn user guess to lower case and store in variable
    var userKeyGuess = event.key.toLowerCase();
    //push the user guess into the variable userGuess
    userGuess.push(userKeyGuess);
    //display the user guesses
    var html =
    "<p> You have chose: "+ userGuess + "</p>";
    document.querySelector("#guesses").innerHTML = html;
    //check to see if word is computer word
    for(var i =0; i < computerWord.length; i++){
        if(computerWord[i] == userKeyGuess){
            var matchComputerWordIndex = computerWord.indexOf(userKeyGuess);
            blankANDguessed.splice(matchComputerWordIndex,1,userKeyGuess);
            document.querySelector("#game").innerHTML = blankANDguessed;
        }
    }
    console.log(userKeyGuess);
    console.log(blankANDguessed);

  
}
