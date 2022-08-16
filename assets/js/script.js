var userLength = []
var selectionList = []

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var validPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (validPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  }
}

// Password Generation
function generatePassword() {
  var password = "";
  for(var i = 0; i < userLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectionList.length)
    password = password + selectionList[randomIndex];
  }
  return password;
}

function getPrompts() {
  // Reset Selection List
  selectionList = [];
  //Propmt for Length of Code (Minimim 8 Characters)
  userLength = parseInt(prompt("How many characters in your password (Minimum of 8)?"));
  if (isNaN(userLength)) {
    window.alert("Entry Not Valid! Please try again")
    return
  }
  //Length Validation - If not a valid entry, start over
  if (userLength < 8 || userLength > 128) {
    window.alert("Password Length must be more that 8, but less that 128 characters!")
    return
  }

  //Prompt for number Characters
  if (confirm("Would you like numbers in your password?")) {
    selectionList = selectionList.concat(numberList);
  }
  
  //Prompt for Special Characters
  if (confirm("Would you like special characters in your password?")) {
    selectionList = selectionList.concat(symbolList);
  }

  //Prompt for Lowercase Letters
  if (confirm("Would you like lowercase characters in your password?")) {
    selectionList = selectionList.concat(lowerCaseList);
  }

  //Prompt Uppersase Letters
  if (confirm("Would you like uppercase characters in your password?")) {
    selectionList = selectionList.concat(upperCaseList);
  }

  if (selectionList == false) {
    window.alert("Please select at least one (Uppercase, Lowercase, Special Characters, Numbers")
    return
  }
  return true;

}