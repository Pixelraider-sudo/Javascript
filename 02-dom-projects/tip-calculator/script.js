let billInput = document.getElementById("bill");

let tipInput = document.getElementById("tip");

let button = document.getElementById("btn");

let result = document.getElementById("result");

button.onclick = function () {
  let bill = parseFloat(billInput.value);

  let tipPercent = parseFloat(tipInput.value);

  // TIP CALCULATION
  let tipAmount = (bill * tipPercent) / 100;

  // TOTAL BILL
  let total = bill + tipAmount;

  result.textContent =
    "Tip: $" + tipAmount.toFixed(2) + " | Total: $" + total.toFixed(2);
};


// MINI CHALLENGE 

// Try:
// add service quality buttons
// split bill among people
// prevent empty inputs
// add currency selector
// change result color dynamically