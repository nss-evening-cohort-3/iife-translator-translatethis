// This is the main iife that gets augmented by our individual js files

var Translator = (function() {
  return {};
}());



// All the things that we need to grab from the DOM in index.html

var button = document.getElementById("btn");
var select = document.getElementById("languages");
var textInput = document.getElementById("words");
var languageChoice;


// This is the TRANSLATE button being clicked.
// It calls 'makeArray', which makes the user input into an array
// 'languageChoice' gets passed in because 'makeArray' will pass it on
// to the 'translateByLanguage' function (which needs the language input)

button.addEventListener("click", function(){
  var inputString = textInput.value;
  makeArray(inputString, languageChoice);
});


// This function takes the user's input and splits it into an array.
// It will call the 'translateByLanguage' function, so it needs to have
// 'languageSelection' as an argument

var makeArray = function(inputString, languageSelection) {
  var inputArray = inputString.split(" ");
  var languageChoice = select.selectedIndex;
  translateByLanguage(languageChoice, inputArray);
};


// This calls the translation functions from our different augmenters
// by determining what language was chosen by the user.

var translateByLanguage = function(languageSelection, inputArray) {

  if (languageSelection === 1) {
    // This will be a call to the Haitian-Creole iife

  }
  else if (languageSelection === 2) {
    // This will be a call to the Russian iife

  }
  else if (languageSelection === 3) {
    // This will be a call to the Italian iife

  }
  else if (languageSelection === 4) {
    // This will be a call to the Dutch iife

  }
  else {
    alert("I'm sorry.  That's not a valid choice.");
  }
};

// Add the newly translated string to the DOM

var showTranslation = function(translatedString) {
  var textOutput = document.getElementById("transText");
    textOutput.innerHTML += translatedString;
};



