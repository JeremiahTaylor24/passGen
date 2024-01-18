// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




const length = 14;
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()?";
const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;


    function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

      
    
      
      let password = '';
      password += upperCaseChars[Math.floor(Math.random()* upperCaseChars.length)];
      password += lowerCaseChars[Math.floor(Math.random()* lowerCaseChars.length)];
      password += numberChars[Math.floor(Math.random()* numberChars.length)];
      password += symbolChars[Math.floor(Math.random()* symbolChars.length)];

      while(length > password.length){

        password += allChars[Math.floor(Math.random()* allChars.length)];

      }

      



    
     
    
      return password;
}
  
    
  
    








  





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
