// This is the main iife that gets augmented by our individual js files

var Translator = (function() {

  return {};

})();



// All the things that we need to grab from the DOM in index.html

var button = document.getElementById("btn");
var select = document.getElementById("languages");
var textInput = document.getElementById("words");
var transString = "";
var languageChoice;


// This is the TRANSLATE button being clicked.
// It calls 'makeArray', which makes the user input into an array
// 'languageChoice' gets passed in because 'makeArray' will pass it on
// to the 'translateByLanguage' function (which needs the language input)

button.addEventListener("click", function(){
  // get the user's input and save it in a variable called 'inputString'
  var inputString = textInput.value.toLowerCase();
  // calls the 'makeArray' function (see below)
  makeArray(inputString, languageChoice);
});


// This function takes the user's input and splits it into an array.
// It will call the 'translateByLanguage' function, so it needs to have
// 'languageSelection' as an argument

var makeArray = function(inputString, languageSelection) {
  // Take the input string (user's input from above) and break it into an array
  // Save the array in a variable called 'inputArray'
  var inputArray = inputString.split(" ");
  // Get the user's choice of language by grabbing the value of the select field
  var languageChoice = select.selectedIndex;
  // CALL the 'translateByLanguage' function
  translateByLanguage(languageChoice, inputArray);
};


// This calls the translation functions from our different augmenters
// by determining what language was chosen by the user.

var translateByLanguage = function(languageSelection, thisArray) {

  if (languageSelection === 1) {
  var translatedArray = Translator.translateToHaitian(thisArray);
    makeString(translatedArray, "haitianText");
  }
  else if (languageSelection === 2) {
    var translatedArray = Translator.translateToRussian(thisArray);
      makeString(translatedArray, "russianText");
  }
  else if (languageSelection === 3) {
    var translatedArray = Translator.translateToItalian(thisArray);
      makeString(translatedArray, "italianText");
  }
  else if (languageSelection === 4) {
    var translatedArray = Translator.translateToDutch(thisArray);
      makeString(translatedArray, "dutchText");
  }
  else {
    alert("I'm sorry.  That's not a valid choice.");
  }
};



var makeString = function(translatedArray, newClass) {
    transString = translatedArray.join(" ").toUpperCase() + "!";
    showTranslation(transString, newClass);
}


var showTranslation = function(translatedString, newClass) {
  // Gets the id of the div where we want to put the new text and stores it
  // in a variable called 'textOutput'
    var textOutput = document.getElementById("transText");
    // Says 'change the HTML content of this div to whatever is in translatedString'
      textOutput.innerHTML = translatedString;
// CALLS the 'makePretty' function (see below), passing in the div variable
      makePretty(textOutput, newClass);
};


var makePretty = function(element, newClass) {
  // Changes the class on the text element in the DOM to make it fancy by language.
    element.setAttribute('class', newClass);
};
