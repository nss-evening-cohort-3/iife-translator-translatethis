var Translator = (function(originalTranslator) {

  var translatedWords = [];

  var words = {"happy":"gelukkig", "fourth of july":"nationale feestdag", "go":"lopen", "out":"eruit", "and":"en", "blow up":"opblaze", "shit":"rotzooi", "birthday":"verjaardag", "greetings":"groeten", "seasons":"jaargetijde", "mother's day":"Moederdag", "father's day":"Vaderdag", "sit":"ga zit", "your":"je", "ass":"reet", "where":"waar", "day":"dag", "is":"is", "the":"het", "rum":"rum", "Trump's":"van Trump", "hair":"haar", "looks":"ziet aan", "like":"gelijk", "a":"een", "dead":"dood", "ferret":"fret"};


   // ******** Main translation function ******** //

   // This gets called in the translateByLanguage function in main.js
   // It takes an argument (which is the array-version of the user's input)
    originalTranslator.translateToDutch = function(items) {

       // This loops through the input array
       items.forEach(function(item) {
        // each word (they're called 'items' here) gets translated and added
        // to an empty array called 'translatedWords'
        translatedWords.push(words[item]);

       });
       return translatedWords;
    }


// This hooks up the original IIFE to the augmenters
    return originalTranslator;


})(Translator || {});

