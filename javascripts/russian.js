var RussianWords = ["happy", "shit", "day", "dead", "hair", "ferret"];
var Translator = (function(originalTranslator){
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
"ferret": "хорек"}
  
var translatedWords = [];

  // A function to push the translated words into the translatedWords array
  // THIS ONE WILL DEFINITELY BE PART OF OUR FINAL CODE
  originalTranslator.translateToRussian = function(items) {
    items.forEach(function(item) {
    translatedWords.push(words[item]);
    
  });

return translatedWords;
}
// This is what hooks up the original iife to the augmenters
  return originalTranslator;

}(Translator || {}));








  
  