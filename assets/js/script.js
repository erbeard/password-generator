// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min)+min)
}

function getRandom(list) {
  return list[randomInt(0,list.length)]
}

function generatePassword() {
  //Propmt for Length of Code (Minimim 8 Characters)
  var userLength = window.prompt("How many characters in your password(Minimum of 8)?");
  // Validate userLength is a Number
  var passLength = parseInt(userLength)
  //Numver Validation - If not a valid entry, start over
  if (isNaN(passLength)) {
    window.alert("Entry Not Valid! Please try again")
    return
  }
  //Length Validation - If not a valid entry, start over
  if (passLength < 8 || passLength > 128) {
    window.alert("Password Length must be more that 8, but less that 128 characters!")
    return
  }
  //Prompt for number Characters
  var numbersIncl = window.confirm("Would you like numbers in your password?")
  //Prompt for Special Characters
  var specialCharIncl = window.confirm("Would you like special characters in your password?")
  //Prompt for lowercase Characters
  var lowcaseCharIncl = window.confirm("Would you like lowercase characters in your password?")
  //Prompt for uppercase Characters
  var upcaseCharIncl = window.confirm("Would you like uppercase characters in your password?")


  //Selection Lists
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var userSelections = []

  if (numbersIncl === true) {
    userSelections.push(numberList)
  }

  if (specialCharIncl === true) {
    userSelections.push(symbolList)
  }

  if (lowcaseCharIncl === true) {
    userSelections.push(lowerCaseList)
  }

  if (upcaseCharIncl === true) {
    userSelections.push(upperCaseList)
  }

  if (userSelections === 0) {
    userSelections.push(upperCaseList)
  }

  var generatedPassword = ""

for (var i = 0; i < passLength; i++) {
  var randomList = getRandom(userSelections)
  var randomChar = getRandom(randomList)
  console.log(randomChar)
}


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

