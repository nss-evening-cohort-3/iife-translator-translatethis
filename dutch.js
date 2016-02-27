var Translator = (function(originalTranslator) {

var dummyWords = ["happy", "shit", "day", "dead", "hair", "ferret"];
var translatedWords = [];

var words = {"happy":"gelukkig", "fourth of july":"nationale feestdag", "go":"lopen", "out":"eruit", "and":"en", "blow up":"opblaze", "shit":"rotzooi", "birthday":"verjaardag", "greetings":"groeten", "seasons":"jaargetijde", "mother's day":"Moederdag", "father's day":"Vaderdag", "sit":"ga zit", "your":"je", "ass":"reet", "where":"waar", "is":"is", "the":"het", "rum":"rum", "Trump's":"van Trump", "hair":"haar", "looks":"ziet aan", "like":"gelijk", "a":"een", "dead":"dood", "ferret":"fret"};

  // A function to test whether we can access our foreign language words
  // Probably not going to be part of the final code -- though it could be,
  // if we wanted to give the user a list of possible words to use...
  originalTranslator.getDutchWords = function() {
    return words;
  }

  // A function to test whether we are capturing the value of the key
  // (to show whether we're actually translating the word)
  originalTranslator.justDutch = function(example) {
    return words[example];
  }

  // A function to push the translated words into the translatedWords array
  // THIS ONE WILL DEFINITELY BE PART OF OUR FINAL CODE
  originalTranslator.makeDutchArray = function(English_word) {
    translatedWords.push(words[English_word]);
    return translatedWords;
  }

  // This is a tester - currently not playing nicely with main.js
  originalTranslator.sayHi = function() {
    console.log("Hello");
  }

// This is what hooks up the original iife to the augmenters
  return originalTranslator;

}(Translator || {}));

// The next part will need a .map that returns a value (foreign word) that matches a key (English word)

// These are just testing to see if the above methods are working
console.log(Translator.getDutchWords());
console.log(Translator.justDutch('happy'));
console.log(Translator.makeDutchArray("shit"));

// This is the function call that is not playing nicely right now.
Translator.sayHi();

