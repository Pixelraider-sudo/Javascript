let birthdate = document.getElementById("birthdate");

let button = document.getElementById("btn");

let result = document.getElementById("result");

button.onclick = function () {
  let birthYear = new Date(birthdate.value).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  result.textContent = "You are " + age + " years old.";
};


//new date()-creates current date /time object
//getFullYear- extract year only.

// MINI CHALLENGE 
// Try:
// calculate exact months
// calculate exact days
// add birthday countdown
// prevent future dates
// show zodiac sign