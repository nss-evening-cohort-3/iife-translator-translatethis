var Translator = function(originalTranslator) {

var  words = {"happy":"gelukkig", "fourth of july":"nationale feestdag", "go":"lopen", "out":"eruit", "and":"en", "blow up":"opblaze", "shit":"rotzooi", "birthday":"verjaardag", "greetings":"groeten", "seasons":"jaargetijde", "mother's day":"Moederdag", "father's day":"Vaderdag", "sit":"ga zit", "your":"je", "ass":"reet", "where":"waar", "is":"is", "the":"het", "rum":"rum", "Trump's":"van Trump", "hair":"haar", "looks":"ziet aan", "like":"gelijk", "a":"een", "dead":"dood", "ferret":"fret"};

  Translator.getDutchWord = function(englishWord){
    return word.indexOf(englishWord);
  }

}(Translator);

console.log(Translator.getDutchWord("happy"));
