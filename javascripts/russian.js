
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
    "rum": "ром",
    "Trump's": "Trump's",
    "hair": "волосы",
    "looks": "внешность",
    "like": "как",
    "a": "a",
     "dead": "мертвый",
    "ferret": "хорек"
  };

   // ******** Main translation function ******** //

   // This gets called in the translateByLanguage function in main.js
   // It takes an argument (which is the array-version of the user's input)
    originalTranslator.translateToRussian = function(items) {

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