let passwordText = document.getElementById("password");
let button = document.getElementById("btn");

//character sets
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

button.onclick = function() {
    let passwordLength = 12; // You can change this to generate passwords of different lengths
    let password = "";

    //loop 12 times
    for(let i = 0; i < passwordLength; i++) {
        //generate a random index to pick a character from the characters string
        let randomIndex = Math.floor(Math.random()*characters.length);

        password += characters[randomIndex];
        //add character to existing string
        //append the character to the password
    }
    passwordText.textContent = password; //display the generated password in the input field
};

// MINI CHALLENGE

// Try:

// make 20-character passwords
// add copy button
// change background when generating
// add “password strength”
// avoid repeating same password twice

let button1 = document.getElementById("btn1");
let copyButton2 = document.getElementById("btn2");
let passwordText1 = document.getElementById("password1");

let characters1 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

button1.onclick = function () {
  let passwordLength1 = 20;
  let password1 = "";

  //loop 20
  for (let i = 0; i < passwordLength1; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters1.length);

    password1 += characters1[randomIndex1];
  }
  passwordText1.textContent = password1;
};
