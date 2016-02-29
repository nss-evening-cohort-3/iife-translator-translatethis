var Translator = (function(originalTranslator) {

  var translatedWords = [];

  var words = {"happy":"gelukkig", "fourth of july":"nationale feestdag", "go":"lopen", "out":"eruit", "and":"en", "blow up":"opblaze", "shit":"rotzooi", "birthday":"verjaardag", "greetings":"groeten", "seasons":"jaargetijde", "mother's day":"Moederdag", "father's day":"Vaderdag", "sit":"ga zit", "your":"je", "ass":"reet", "where":"waar", "day":"dag", "is":"is", "the":"het", "rum":"rum", "Trump's":"van Trump", "hair":"haar", "looks":"ziet aan", "like":"gelijk", "a":"een", "dead":"dood", "ferret":"fret"};



   // ******** Main translation function ******** //

  
   // This gets called in the translateByLanguage function in main.js
   // It takes an argument (which is the array-version of the user's input)
    originalTranslator.translateToDutch = function(items) {
      // We start with an empty string (we'll fill it up with our foreign words)
      var dutchString = "";
       // This loops through the input array
       items.forEach(function(item) {
        // each word (they're called 'items' here) gets translated and added
        // to an empty array called 'translatedWords'
        translatedWords.push(words[item]);
        // The array gets converted back into a string
        dutchString = translatedWords.join(" ").toUpperCase() + "!";
        // CALLS the 'showTranslation' function and gives it 'dutchString'
        originalTranslator.showTranslation(dutchString);
       });
    }


  // ******** Adds the translated string to the DOM ******** //

    // Takes an argument ('dutchString') when it's called above
    originalTranslator.showTranslation = function(translatedString) {
    // Gets the id of the div where we want to put the new text and stores it
    // in a variable called 'textOutput'
    var textOutput = document.getElementById("transText");
    // Says 'change the HTML content of this div to whatever is in translatedString'
      textOutput.innerHTML = translatedString;
      // CALLS the 'makepretty' function (see below), passing in the div variable
      originalTranslator.makePretty(textOutput);
    }

  // **** Sets the class on the text div so we can vary it by language **** //

    originalTranslator.makePretty = function(element) {
      // Takes the element variable (passed in above) and adds a class to it
        element.setAttribute('class', 'dutchText');
    }


// This hooks up the original IIFE to the augmenters
    return originalTranslator;


})(Translator || {});

