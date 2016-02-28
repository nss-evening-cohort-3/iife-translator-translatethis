var Translator = (function (originalTranslator) {
var italianArray = [];


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
  

  originalTranslator.italianTranslation = function(items) {
    items.forEach(function(item) {
      italianArray.push(lexicon[item]);
    });
    //return italianArray;
    console.log(italianArray);
  }
    return originalTranslator;

}(Translator || {}));



