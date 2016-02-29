
var Translator = (function(originalTranslator){

  var translatedWords = [];

  var words = {
  "blow": "дуть", 
  "shit": "дерьм",
  "up": "вверх",
  "happy": "счастливый", 
  "fourth": "четвертый",
  "of": "из",
  "July": "июль", 
  "go": "идти",
  "out": "вне", 
  "and": "а также",
  "birthday": "день рождения",
  "greetings": "Привет",
  "seasons": "времена года", 
  "mother's": "мамин", 
  "father's": "отца", 
  "day": "день", 
  "sit": "сидеть", 
   "your": "ваш",
  "ass": "жопа" , 
   "down": "вниз", 
  "where": "где", 
  "is": "является", 
  "the": "the", 
  "rum": "ром" , 
  "Trump's": "Trump's", 
  "hair": "волосы", 
  "looks": "внешность", 
  "like": "как" , 
  "a": "a" , 
   "dead": "мертвый", 
  "ferret": "хорек"};

// ******Main Translation Function********* //


// This gets called in the translateByLanguage function in main.js
// It takes an argument (which is the array-version of the user's input)
  originalTranslator.translateToRussian = function(items) {
    // We start with an empty string (we'll fill it up with our foreign words)
    var russianString = "";
    // This forEach loops through the input array
    items.forEach(function(item) {
    // each word (called 'items' here) gets translated and added
    // to an empty array called 'translatedWords'
      translatedWords.push(words[item]);
    // The array gets converted back into a string
    russianString = translatedWords.join(" ").toUpperCase() + "!";
    // CALLS the 'showTranslation' function and gives it 'russianString'
    originalTranslator.showTranslation(russianString);
    });
  }

// ******** Adds the translated string to the DOM ******** //


  //Takes and argument ('russianString') when it's called above
    originalTranslator.showTranslation = function(translatedRussianString) {
    //Gets the id of the div where we want to put the new text and stores it
    //in a variable called 'textOutput'
    var textOutput = document.getElementById("transText");

  // Says 'Change the HTML content of this div to whatever is in the translatedString'
    textOutput.innerHTML = translatedRussianString;
    // CALLS the 'makepretty' function (see below), passing in the div variable 
    originalTranslator.makePretty(textOutput);
  }



// ****** Sets the class on the text div so we can vary it by language *** //

    originalTranslator.makePretty = function(element) {
      // Takes the element variable (passed in above) and adds a class to it
      element.setAttribute('class', 'russianText');
    }


// This is what hooks up the original iife to the augmenters
  return originalTranslator;

})(Translator || {});