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

