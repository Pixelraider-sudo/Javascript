// MINI CHALLENGE
// Try:
// add backspace button
// add keyboard support
// add hover effects
// prevent invalid expressions
// add calculator history

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

// LOOP THROUGH BUTTONS
buttons.forEach(function (button) {
  button.onclick = function () {
    let value = button.textContent;

    // CLEAR
    if (value === "C") {
      display.value = "";
    }

    // EQUAL
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (value === "BACK") {
      display.value = display.value.slice(0, -1);
    } else if (value === "KEY") {
      // Handle KEY button functionality
    } else if (value === "HIST") {
      // Handle HIST button functionality
    }

    // NORMAL BUTTONS
    else {
      display.value += value;
    }
  };
});

//querySelectorAll()=gets many elements.-returns all buttons
//forEach()=loops through the buttons
//onclick=function()=when the button is clicked, do something
//textContent=gets the text inside the button
//eval()=evaluates the string as a mathematical expression and returns the result
