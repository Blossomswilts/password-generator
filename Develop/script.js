// Assignment code here

// let finalPassword = str();
// let selectionStr = str();




function generatePassword() {
  // Create used variables
  const lowerCase =   ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upperCase =   ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const specialCase = [' ', '!', `"`, '#', '$', '%', '&', `'`, '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', `\\\\`, ']', '^', '_', '`', '{', '|', '}', '~'];
  const numbers =     ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//      Create prompts for password criteria
// Create password input between or equal to 8 & 128 characters.
// Do you want uppercase characters?
// Do you want lowercase Characters?
// Do you want numbers?
// Do you want spcial characters?

// Validate that at least one of the selections is true and that the characters are between set numbers. 
// Password would be made when validated. 



//Display password in an alert or written to the page. 
  return "password"
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
