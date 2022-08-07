// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword (){
  //prompts and checks for valid character count
  let characters = prompt("How many characters would you like?");
  let characterCount = parseInt(characters);
  if (characterCount < 8 || characterCount > 128) {
    alert("Invalid");
    return;
  }  

  //Prompt for Boolean to parameters for password.
  let includeLowerCase = confirm("Would you like to use lower case characters?");
  let includeUpperCase = confirm("Would you like to use upper case characters?");
  let includeNumeric = confirm("Would you like to use numerical values?");
  let includeSpecial = confirm("Would you like to use special characters?");
  let invalidSelection = !includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial;
  if (invalidSelection) {
    alert("Invalid");
    return;
  }

  //Building password character set.
  let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericCharacters = "0123456789";
  let specialCharaters = "!@#$%^&*()_+><";
  let generatedPasswordCharacters = "";
  if (includeLowerCase)
    generatedPasswordCharacters += lowerCaseCharacters;
  if (includeUpperCase)
    generatedPasswordCharacters += upperCaseCharacters;
  if (includeNumeric)
    generatedPasswordCharacters += numericCharacters;
  if (includeSpecial)
    generatedPasswordCharacters += specialCharaters;
  
  //Randomly generate password.
  let generatedPassword = "";
  for (let i = 0; i < characterCount; i++) {
    let randomIndex = Math.floor(Math.random() * generatedPasswordCharacters.length);
    let randomCharacter = generatedPasswordCharacters[randomIndex];
    generatedPassword += randomCharacter;
  }

  return generatedPassword;
}


