// This is the main iife that gets augmented by our individual js files

var Translator = (function() {
  return {};
}());


// All the things that we need to grab from the DOM in index.html

var button = document.getElementById("btn");
var select = document.getElementById("languages");
var textInput = document.getElementById("words");
var languageChoice;


select.addEventListener('change', function(){
  var languageChoice = select.selectedIndex;
  return languageChoice;
  });


// This function takes the user's input and splits it into an array

var makeArray = function(inputString) {
  var inputArray = inputString.split(" ");
};

button.addEventListener("click", function(){
  getInput();
  console.log(languageChoice);
});

var getInput = function() {
  var inputString = textInput.value;
  makeArray(inputString);
};

// This function is called by the language selector event listener.
// It calls a different function depending on what language is chosen.
var select = document.getElementById("languages");



var translateByLanguage = function(languageSelection, inputArray) {

  if (languageSelection === 1) {
    // This will be a call to the Haitian-Creole iife
    console.log("Haitian", inputArray);
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


// Grabbing the id where the text has been input, to get their value






