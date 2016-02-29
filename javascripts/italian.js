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

// **************Main Translation Function

// This gets called in the translateByLanguage function in main.js
// It takes an argument (which is the array-version of the user's input)
  originalTranslator.translateToItalian = function(items) {
    //We start with an empty string (we'll fill it up with our foreign words)
    var italianString = "";
    //This forEach loops through the input array
    items.forEach(function(item) {
    // each word (called 'items' here) gets translated and added
    //to an empty array called 'translatedWords'
      italianArray.push(lexicon[item]);
    // The array gets converted back into a string 
    italianString = italianArray.join(" ").toUpperCase() + "!";
    //CALLS the 'showTranslation' function and gives it 'italianString'
    originalTranslator.showTranslation(italianString);
    });
  }

//****************Adds the translated string to the DOM ****************** //


  //Takes an argument ('italianString') when it's called above
  originalTranslator.showTranslation = function(translatedString) {
//Gets the id of the div where we want to put the new text and stores it
//in a variable called 'textOutput'
  var textOutput = document.getElementById("transText");
  //Says 'change the HTML of this div to whatever it is in translatedString'
   textOutput.innerHTML = translatedString;
  //CALLS the 'makePretty' function (see below), passing in the div variable
    originalTranslator.makePretty(textOutput);    
  }

//**** Sets the class on the text div so we can vary it by language ***** //
  originalTranslator.makePretty = function(element) {
    //Takes the element variable (passed in above) and adds a class to it
    element.setAttribute("class", "italianText");
  }

  //This hooks up the original IIFE to the augmenters
    return originalTranslator;

}(Translator || {}));



