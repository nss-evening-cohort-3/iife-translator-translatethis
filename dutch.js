var dutchWords = ["happy", "shit", "day", "dead", "hair", "ferret"];

var Translator = (function(originalTranslator) {

var translatedWords = [];

var words = {"happy":"gelukkig", "fourth of july":"nationale feestdag", "go":"lopen", "out":"eruit", "and":"en", "blow up":"opblaze", "shit":"rotzooi", "birthday":"verjaardag", "greetings":"groeten", "seasons":"jaargetijde", "mother's day":"Moederdag", "father's day":"Vaderdag", "sit":"ga zit", "your":"je", "ass":"reet", "where":"waar", "day":"dag", "is":"is", "the":"het", "rum":"rum", "Trump's":"van Trump", "hair":"haar", "looks":"ziet aan", "like":"gelijk", "a":"een", "dead":"dood", "ferret":"fret"};


  originalTranslator.doDutchTranslation = function(items) {
    var dutchString = ""
     items.forEach(function(item) {
      translatedWords.push(words[item]);
      dutchString = translatedWords.join(" ");
     });
    return dutchString;
  }



// This is what hooks up the original iife to the augmenters
  return originalTranslator;

}(Translator || {}));




