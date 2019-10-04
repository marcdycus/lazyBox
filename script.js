var wins = 0;
var losses = 0;
var guessesLeft = 0;
var lettersGuessed = [];
var computerChoice = [];
var correctGuess = [];
var wantedLevel = [];


var phrases = ["a piece of cake", "a dime a dozen", "barking up the wrong tree",
    "back to square one", "beating around the bush",
    "finger licking good", "in a pickle", "put your money where your mouth is",
    "two peas in a pod", "sitting ducks", "curiosity killed the cat",
    "let the cat out of the bag", "spilled milk", "raining cats and dogs",
    "hold your horses", "long in the tooth", "crocodile tears",
    "elephant in the room", "fish out of water", "bull in a china shop", "icing on the cake",
    "spill the beans", "eat my hat", "easy as pie", "driving me nuts", "wild goose chase", "better late than never"];
var animals = ["pigeon", "ostrich", "elephant", "alpaca", "alligator", "skink", "skunk",
    "wallaby", "beaver", "armadillo", "turkey", "baboon", "bald eagle", "honey badger",
    "bandicoot", "vulture", "spider monkey", "bobcat", "butterfly", "cockatoo", "chimpanzee",
    "crocodile", "dolphin", "tortoise", "woodpecker", "dragonfly", "rattlesnake",
    "penguin", "flamingo", "flying squirrel", "gazelle", "anteater", "grizzly bear", "leopard",
    "jackal", "mongoose", "porcupine", "komodo dragon"];
var disney = ["aladdin", "ariel", "bambi", "baymax", "buzz lightyear", "bo peep",
    "cheshire cat", "cinderella", "darth vader", "eeyore", "jack skellington",
    "lightning mcqueen", "mary poppins", "mickey mouse", "minnie mouse", "peter pan",
    "captain hook", "piglet", "pocahontas", "anastasia", "rapunzel", "spider man", "tinker bell",
    "winnie the poo", "woody", "hercules", "jiminy cricket", "donald duck", "rafiki", "pumbaa"];
var misc = ["bilingual", "ephemeral", "verbatim", "petrify", "pulverize", "extravagant", "memorize",
    "incognito", "malleable", "ductile", "monopoly", "insolvent", "fragile", "dicerptible", "imminent",
    "sincere", "paradise", "palisade", "orthodox", "amnesia", "effluent", "carnivorous",
    "omnivorous", "alloy", "nostalgia", "recipe", "versatile", "skeleton", "character",
    "embezzle", "chassis", "silhouette", "obnoxious", "irresistable", "effertless", "auditorium", "encyclopedia", "galvanize",
    "grogginess", "haphazard", "buckaroo", "fuchsia", "glowworm", "grogginess", "knapsack"];
var cities = ["new york", "los angeles", "chicago", "houston", "phoenix", "philadelphia", "san antonio",
    "san diego", "dallas", "austin", "jacksonville", "fort worth", "columbus", "indianapolis", "el paso",
    "detroit", "nashville", "knoxville", "milwaukee", "portland", "memphis", "las vegas", "baltimore",
    "louisville", "fresno", "sacramento", "kansas city", "atlanta", "colorado springs", "raleigh", "albuquerque",
    "arlington", "minneapolis", "cleveland", "bakersfeild", "aurora", "honolulu", "corpus christi", "ljubljana"];

var lettersText = document.getElementById("letters-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// var plAgn = document.getElementById("playAgain");
var strt = document.getElementById("start");
var correctText = document.getElementById("correctGuess");
var wantedText = document.getElementById("wanted-text");
var form = document.getElementById("options");




function start() {

    guessesLeft = 5;
    wantedLevel = [];
    lettersGuessed = [];
    correctGuess = [];
    strt.style.display = "none";
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    form.disabled = true;

    // happens on start of game

    if (form.value == "phrases") {
        computerChoice = phrases[Math.floor(Math.random() * phrases.length)];
    }

    if (form.value == "cities") {
        computerChoice = cities[Math.floor(Math.random() * cities.length)];
    }

    if (form.value == "animals") {
        computerChoice = animals[Math.floor(Math.random() * animals.length)];
    }

    if (form.value == "disney") {
        computerChoice = disney[Math.floor(Math.random() * disney.length)];
    }

    if (form.value == "misc") {
        computerChoice = misc[Math.floor(Math.random() * misc.length)];
    }
    

    //for loop for blank spaces of computerChoice
    for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] == " ") {
            correctGuess[i] = " ";
        } else {
            correctGuess[i] = "_";
        }
    }

    // replace("RegEx").length replaces "" with none
    var remaining = computerChoice.replace(/\s/g, "").length;
    //gameplay
    document.onkeyup = function (event) {
        var userGuess = event.key;
        //indicates whether event.key pressed is within the computers random choice (true or false)**
        var includes = computerChoice.includes(userGuess);
        //defines which index userGuess is in alphabet
        var i = alphabet.indexOf(userGuess);
        //takes userGuess out of alphabet array (always perform)
        alphabet.splice(i, 1);
        // IF WIN statement. Add to wins and play a song*********(DOESNT WORK)
        if (remaining == 0) {
            wins++;
            strt.style.display = "block";
            start();
        }
        //only perform this if the letter has not been taken out of alphabet array
        else if ((i !== -1) && (remaining > 0)) {
            lettersGuessed.push(" " + userGuess);
            //if includes is true, push guess to correctGuess array
            if (includes) {
                // for loop to position letters in correct order
                for (var i = 0; i < computerChoice.length; i++) {
                    if (computerChoice[i] === userGuess) {
                        correctGuess[i] = userGuess;
                        remaining--;
                    }
                }
                //if includes is false, minus guessesleft   
            } else {
                if (guessesLeft >= 1) {
                    guessesLeft--;
                    wantedLevel.push("$");
                }
                //if LOSE STATEMENT. add to losses and play a song*********
                //if no guesses are left, end game and start new one
                //
                if (guessesLeft == 0) {
                    strt.style.display = "block";
                    losses++;
                    start();
                }
            }
        }
        
        lettersText.textContent = "Letters Guessed: " + lettersGuessed.join(" ");
        correctText.textContent = correctGuess.join(" ");
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        wantedText.textContent = "WANTED LEVEL: " + wantedLevel.join(" ");
    }
    lettersText.textContent = "Letters Guessed: ";
    winsText.textContent = "Wins: ";
    lossesText.textContent = "Losses: ";
    wantedText.textContent = "WANTED LEVEL: ";
    correctText.textContent = correctGuess.join(" ");
}





