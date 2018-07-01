 //create an array of Harry Potter Movies

var HPMovies;
var HPMovies = ["Philosopher's Stone", "Chamber Of Secrets", "Prisoner Of Azkaban", "Goblet Of Fire", "Order Of The Phoenix", 
                "Half-Blood Prince", "Deathly Hallows Part-1"];
        for (var i =0; i <HPMovies.length; i++); {
            console.log("Harry Potter" + HPMovies[i]);
        }
        
//Generate an array of underscores that is the length of the above array
var HPMovies = ["Philosopher's Stone", "Chamber Of Secrets", "Prisoner Of Azkaban", "Goblet Of Fire", "Order Of The Phoenix", 
"Half-Blood Prince", "Deathly Hallows Part-1"];
var underScores = [];
for (var i =0; i < word.length; i++) {
  underScores.push("_");
}
console.log(word);
console.log(underScores.join(" "));

 function myFunction() {
    document.getElementById("demo").style.keyEvent = "Press any key to get started!";
}

var percent;
var word;
var letter;
var num;
var letters;
var index;

function startGame(word, num, letter)
{
  HPMovies.init();
    word = HPMovies.pickRandomWord(wordArray); 
    letter = HPMovies.setWord(word);
  HPMovies.createBlanks(num);
    console.log("Start!");
    console.log(word);
    console.log(num);
    HPMovies.inWord(letter);
    HPMovies.findLetters(letter);
}

function letterTyped(letter, percent)
{
   HPMovies.hasLetterBeenGuessed(letter);
    HPMovies.addCorrectGuess(letter);
    HPMovies.addIncorrectGuess(letter);
    HPMovies.revealHPMovies();
}

function endGame(letters)
{
    HPMovies.isGameWon(letters);
    HPMOvies.gameOver(console.log("I won!"));
}
