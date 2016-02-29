
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
	"ferret":"découvrir" };

// ******Main Translation Function********* //


// This gets called in the translateByLanguage function in main.js
// It takes an argument (which is the array-version of the user's input)
  originalTranslator.translateToHaitian = function(items) {
    // We start with an empty string (we'll fill it up with our foreign words)

    // This forEach loops through the input array
    items.forEach(function(item) {
    // each word (called 'items' here) gets translated and added
    // to an empty array called 'translatedWords'
    	translatedWords.push(words[item]);
	});
    // Sends the string of translated words back to the main.js
    return translatedWords;
  }


// This is what hooks up the original iife to the augmenters
  return originalTranslator;

})(Translator || {});


