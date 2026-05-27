//This pproject teaches on;
// form inputs
// number conversion
// calculation logic
// conditions
// result rendering

//new concept is parseFloat()-input values comes as strings

let weightInput = document.getElementById("weight");

let heightInput = document.getElementById("height");

let button = document.getElementById("btn");

let result = document.getElementById("result");

let message = document.getElementById("message");

button.onclick = function () {
  // GET INPUT VALUES
  let weight = parseFloat(weightInput.value);

  let height = parseFloat(heightInput.value);

  // BMI FORMULA
  let bmi = weight / (height * height);

  // SHOW BMI
  result.textContent = "BMI: " + bmi.toFixed(2);

  // BMI MESSAGE
  if (bmi < 18.5) {
    message.textContent = "Underweight";
  } else if (bmi < 25) {
    message.textContent = "Normal weight";
  } else if (bmi < 30) {
    message.textContent = "Overweight";
  } else {
    message.textContent = "Obese";
  }
};

//parseFloat() is used to convert string input to a number, allowing for decimal values.
//.value gets the value from the input field as a string, and parseFloat() converts it to a floating-point number for calculations.
//.toFixed(2) is used to round the BMI result to 2 decimal places for better readability.