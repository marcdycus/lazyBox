var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersGuessed = [];

var phrases = ["a piece of cake", "a dime a dozen", "barking up the wrong tree", 
"back to square one", "beating around the bush", 
"finger licking good", "in a pickle", "put your money where your mouth is", 
"two peas in a pod", "sitting ducks", "curiosity killed the cat", 
"let the cat out of the bag", "spilled milk", "raining cats and dogs", 
"hold your horses", "long in the tooth", "crocodile tears", 
"elephant in the room", "fish out of water", "bull in a china shop", "icing on the cake", 
"spill the beans", "eat my hat", "easy as pie", "driving me nuts", "wild goose chase"];
var animals = ["pigeon", "ostrich", "elephant", "alpaca", "alligator", "skink", "skunk", 
"wallaby", "beaver", "armadillo", "turkey", "baboon", "bald eagle", "honey badger", 
"bandicoot", "vulture", "spider monkey", "bobcat", "butterfly", "cockatoo", "chimpanzee",
"crocodile", "dolphin", "tortoise", "woodpecker", "dragonfly", "rattlesnake",
"penguin", "flamingo", "flying squirrel", "gazelle", "anteater", "grizzly bear", "leopard", 
"jackal", "mongoose", "porcupine"];
var disney = ["aladdin", "ariel", "bambi", "baymax", "buzz lightyear", "bo peep", 
"cheshire cat", "cinderella", "darth vader", "eeyore", "jack skellington",
"lightning mcqueen", "mary poppins", "mickey mouse", "minnie mouse", "peter pan", 
"captain hook", "piglet", "pocahontas", "anastasia", "rapunzel", "spider man", "tinker bell", 
"winnie the poo", "woody", "hercules", "jiminy cricket", "donald duck", "rafiki"];
var misc = ["bilingual", "ephemeral", "verbatim", "petrify", "pulverize", "extravagant", "memorize",
"incognito", "malleable", "ductile", "monopoly", "insolvent", "fragile", "dicerptible", "imminent", 
"sincere", "paradise", "palisade", "orthodox", "amnesia", "effluent", "carnivorous",
"omnivorous", "alloy", "nostalgia", "recipe", "versatile", "skeleton", "character", 
"embezzle", "chassis", "silhouette", "obnoxious", "irresistable", "effertless", "auditorium"];
var cities = ["new york", "los angeles", "chicago", "houston", "phoenix", "philadelphia", "san antonio",
"san diego", "dallas", "austin", "jacksonville", "fort worth", "columbus", "indianapolis", "el paso", 
"detroit", "nashville", "knoxville", "milwaukee", "portland", "memphis", "las vegas", "baltimore",
"louisville", "fresno", "sacramento", "kansas city", "atlanta", "colorado springs", "raleigh", "albuquerque",
"arlington", "minneapolis", "cleveland", "bakersfeild", "aurora", "honolulu", "corpus christi"];

var lettersText = document.getElementById("letters-text");
var livesText = document.getElementById("lives-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


function start() {
    
    var computerGuess = phrases[Math.floor(Math.random() * phrases.length)];
    var strt = document.getElementById("start");
    if (strt.style.display === "none") {
        strt.style.display = "block";

    } else {
        strt.style.display = "none";
        
       

        
    }




}