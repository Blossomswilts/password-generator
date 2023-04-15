// Assignment code here



function generatePassword() {
  // Create used variables
  const lowerCase =   "abcdefghijklmnopqrstuvwxyz";
  const upperCase =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCase = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const numbers =     "0123456789";



//      Create prompts for password criteria
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create password input between or equal to 8 & 128 characters. Also sets string to number with parseInt
let passwordLength = prompt("Choose a number between 8 and 128.");
passwordLength = parseInt(passwordLength);

//Alerts user if password isn't within accepted range.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please choose a number between 8 and 128.");
    return "";
  } 
  
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let finalPassword = "";
let selectionStr = "";


  // Do you want uppercase characters?
let caseUpper = confirm("Do you want any upper case characters?"); 
  if (caseUpper) {
    selectionStr =+ lowerCase;
  }

  // Do you want lowercase Characters?
let caseLower = confirm("Do you want any lower case characters?");
  if (caseLower) {
    selectionStr =+ lowerCase;
  }
  
  // Do you want numbers?
let caseNumber = confirm("Do you want any numbers?");
if (caseNumber) {
  selectionStr =+ numbers;
}

  // Do you want special characters?
let caseSpecial = confirm("Do you want any special case characters?");
if (caseSpecial) {
  selectionStr =+ specialCase;
}
// Will ensure that at least one of the characters is selected. 
while (!caseLower || !caseNumber || !caseUpper || !caseSpecial) {
  alert("Please make sure to include a minimum of one type of character: Special, Upper, Lower or Number"); {
    return "";
  }
}

// Will randomize the selected characters within selectionStr. 
for(var i = 0; i < passwordLength; i++) {
  let randomizedSet = (Math.floor(Math.random() * selectionStr.length));
  finalPassword += selectionStr[randomizedSet];
}

  


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Validate that at least one of the selections is true and that the characters are between set numbers. 

  // finalPassword = selectionStr.sort(() => Math.random() - 0.5);

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
