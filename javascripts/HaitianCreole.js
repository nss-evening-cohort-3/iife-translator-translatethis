// Create function to augment original translater
// create object whose properties are the words
var haitianWords = ["happy", "shit", "day", "dead", "hair", "ferret"];
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
	// originalTranslator.getHaitianCreole = function() {
	// 	return haitianCreole
	// };
	


// A function to test whether we can access our foreign language words
  // Probably not going to be part of the final code -- though it could be,
  // if we wanted to give the user a list of possible words to use...
  // originalTranslator.getHaitianWords = function() {
  //   return words;
  // }

  // A function to test whether we are capturing the value of the key
  // (to show whether we're actually translating the word)
  // originalTranslator.justDutch = function(example) {
  //   return words[example];
  // }

  // A function to push the translated words into the translatedWords array
  // THIS ONE WILL DEFINITELY BE PART OF OUR FINAL CODE
  originalTranslator.makeHaitianArray = function(items) {
    items.forEach(function(item){
    	translatedWords.push(words[item]);
	});
    return translatedWords;
  }

// This is what hooks up the original iife to the augmenters
  return originalTranslator;

}(Translator || {}));

// console.log(Translator.makeHaitianArray(haitianWords));
// The next part will need a .map that returns a value (foreign word) that matches a key (English word)

// These are just testing to see if the above methods are working
// console.log(Translator.getDutchWords());
// console.log(Translator.justDutch('happy'));
// console.log(Translator.makeDutchArray("shit"));

// This is the function call that is not playing nicely right now.
// Translator.sayHi();
