var Translator = (function(originalTranslator){
  var RussianWords = {"дуть дерьмо": "blow shit up", "счастливый": "happy", "четвертое июля": "fourth of July", "Выходи": "go out", "а также": "and", "день рождения": "birthday", "Привет": "greetings", "времена года": "seasons", "мамин": "mother's", "отца": "father's", "день": "day", "сидеть": "sit", "ваш": "your",
"жопа": "ass" , "вниз": "down", "где": "where", "является": "is", "the": "the", "ром": "rum" , "Trump's": "Trump's", "волосы": "hair", "внешность": "looks", "как": "like" , "a": "a" , "мертвый": "dead", "хорек": "ferret"}
  
  
  //add methods to original SolarSystem using object dot notation
  originalTranslator.addRussianWords = function(words) {
    RussianWords.push(words)
    return RussianWords;
  };
  //originalSolarSystem.addDwarfPlanet = function(tinyPlanet){
   // dwarfPlanets.push(tinyPlanet);
    //return dwarfPlanets;
  //};

  originalTranslator.getRussianWords = function() {
    return RussianWords;
  }

  //return the old SolarSystem to the world with its new methods attached
  return originalTranslator;
  }(Translator || {} ));  //<-----------pass in original SolarSystem object

  console.log(Translator.addRussianWords(""));
  