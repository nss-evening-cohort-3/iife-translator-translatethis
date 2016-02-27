var Translator = (function() {
  return {};
}());

var textInput = document.getElementById("Words");
var button = document.getElementById("btn");
button.addEventListener("click", function pullValue(){
  var inputString = textInput.value;

  makeArray(inputString);
});

var makeArray = function (inputString) {
  var inputArray = inputString.split(" ");

  return inputArray;
};


var select = document.getElementById("languages");

select.addEventListener('change', function(){
  var languageChoice = select.selectedIndex;
      chooseLanguage(languageChoice);
  });

var chooseLanguage = function(languageSelection) {
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
