var Translator = (function(originalTranslator) {

  var translatedWords = [];

  var lexicon = {
    "happy": "felice",
    "fourth" : "quarto",
    "of" : "di",
    "july" : "luglio",
    "go" : "vai",
    "out" : "fuori",
    "and" : "e",
    "blow" : "colpo",
    "shit" : "merda",
    "up" : "fino",
    "birthday" : "compleanno",
    "greetings" : "saluti",
    "seasons" : "stagioni",
    "mother's" : "di madre",
    "day" : "giorno",
    "father's" : "di father",
    "sit" : "sedersi",
    "your" : "il tuo",
    "ass" : "culo",
    "down" : "verso il basso",
    "where" : "dove",
    "is" : "è",
    "the" : "il",
    "rum" : "Rum",
    "Trump's" : "di Trump",
    "hair" : "capelli",
    "looks" : "sguardi",
    "like" : "come",
    "a" : "un",
    "dead" : "morti",
    "ferret" : "furetto"
  };

   // ******** Main translation function ******** //

   // This gets called in the translateByLanguage function in main.js
   // It takes an argument (which is the array-version of the user's input)
    originalTranslator.translateToItalian = function(items) {

       // This loops through the input array
       items.forEach(function(item) {
        // each word (they're called 'items' here) gets translated and added
        // to an empty array called 'translatedWords'
        translatedWords.push(lexicon[item]);

       });
       return translatedWords;
    }


// This hooks up the original IIFE to the augmenters
    return originalTranslator;


})(Translator || {});




