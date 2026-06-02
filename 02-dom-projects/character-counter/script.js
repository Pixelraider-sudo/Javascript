let text = document.getElementById("text");

let result = document.getElementById("result");

text.oninput = function () {
  let length = text.value.length;

  result.textContent = length + " characters";
};

//new term
//NEW CONCEPT
// oninput

// Runs EVERY time user types:

// key press
// delete
// paste

// REAL-time tracking


// MINI CHALLENGE 

// Try:

// add word counter
// set max limit (e.g. 100 chars)
// change color when near limit
// show remaining characters
// disable typing after limit