// Create function to augment original translater
// create object whose properties are the words
// var haitianWords = ["happy", "shit", "day", "dead", "hair", "ferret"];
var Translator = (function (originalTranslator) {

	var translatedWords = [];

	var words = {
	"happy": "bon",
	"fourth": "Katriyem",
	"of": "pour", 
	"july":"Jiye",
	"go":"ale",
	"out":"deyo", 
	"and":"ak", 
	"blow":"soufle",
	"shit":"kaka",
	"up":"moute",
	"birthday":"fet", 
	"greetings":"bonjour", 
	"seasons":"sezon",
	"mother's":"manman an",
	"day": "jou",
	"father's":"papa an", 
	"sit": "poze",
	"your": "ou",
	"ass": "boudou",
	"down":"la", 
	"where": "kote",
	"is": "se",
	"the": "la",
	"rum":"wonm nan", 
	"Trump's": "Trump",
	"hair": "cheve",
	"looks": "regarde",
	"like": "konou",
	"a": "yon",
	"dead": "mouri",
	"ferret":"découvrir"

};

// ******Main Translation Function********* //


// This gets called in the translateByLanguage function in main.js
// It takes an argument (which is the array-version of the user's input)
  originalTranslator.translateToHaitian = function(items) {
    // We start with an empty string (we'll fill it up with our foreign words)
    var haitianString = "";
    // This forEach loops through the input array
    items.forEach(function(item) {
    // each word (called 'items' here) gets translated and added
    // to an empty array called 'translatedWords'
    	translatedWords.push(words[item]);
    // The array gets converted back into a string
    haitianString = translatedWords.join(" ").toUpperCase() + "!";
    // CALLS the 'showTranslation' function and gives it 'haitianString'
    originalTranslator.showTranslation(haitianString);

	});
    // return translatedWords;
  }

// ******** Adds the translated string to the DOM ******** //


  //Takes and argument ('haitianString') when it's called above
  originalTranslator.showTranslation = function(translatedHaitianString) {
  //Gets the id of the div where we want to put the new text and stores it
  //in a variable called 'textOutput'
  var textOutput = document.getElementById("transText");

  // Says 'Change the HTML content of this div to whatever is in the translatedString'
    textOutput.innerHTML = translatedHaitianString;
    // CALLS the 'makepretty' function (see below), passing in the div variable 
    originalTranslator.makePretty(textOutput);
  }



// ****** Sets the class on the text div so we can vary it by language *** //

originalTranslator.makePretty = function(element) {
  // Takes the element variable (passed in above) and adds a class to it
  element.setAttribute("class", "haitianText");
}


// This is what hooks up the original iife to the augmenters
  return originalTranslator;

})(Translator || {});


