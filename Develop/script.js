// Assignment code here

const lowerCase =   ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase =   ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const specialCase = [' ', '!', `"`, '#', '$', '%', '&', `'`, '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', `\\\\`, ']', '^', '_', '`', '{', '|', '}', '~'];
const numbers =     ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword() {
  // Create used variables


  let finalPassword = "";
  let selectionStr = "";

//      Create prompts for password criteria

// Create password input between or equal to 8 & 128 characters.
let passwordLength = prompt("Chose a number between 8 and 128.");
if (passwordLength >= 8 && passwordLength <= 128) {
  // Do you want uppercase characters?
    let caseUpper = confirm("Do you want any upper case characters?"); 
  // Do you want lowercase Characters?
    let caseLower = confirm("Do you want any lower case characters?");
  // Do you want numbers?
    let caseNumber = confirm("Do you want any numbers?");
  // Do you want spcial characters?
    let caseSpecial = confirm("Do you want any special case characters?");

} else {
  alert("Please chose a number between 8 and 128.")
}



// Validate that at least one of the selections is true and that the characters are between set numbers. 
if (caseUpper === true) {
  for (var i = 0; i <= passwordLength.length; i++) {
    selectionStr += i(Math.floor(Math.random() * caseUpper.length));
  }
}
if (caseLower === true) {
  for (var i = 0; i <= passwordLength.length; i++);
}
if (caseNumber === true) {
  for (var i = 0; i <= passwordLength.length; i++);
}
if (caseSpecial === true) {
  for (var i = 0; i <= passwordLength.length; i++);
}
// Password would be made when validated. 


//Display password in an alert or written to the page. 
  return finalPassword
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
