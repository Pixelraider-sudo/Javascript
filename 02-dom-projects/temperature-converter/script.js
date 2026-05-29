let tempInput = document.getElementById("temp");

let unit = document.getElementById("unit");

let button = document.getElementById("btn");

let result = document.getElementById("result");

button.onclick = function () {
  let temp = parseFloat(tempInput.value);

  let conversion = unit.value;

  let output;

  if (conversion === "c-f") {
    output = (temp * 9) / 5 + 32;

    result.textContent = output.toFixed(2) + " °F";
  } else {
    output = ((temp - 32) * 5) / 9;

    result.textContent = output.toFixed(2) + " °C";
  }
};


//selct.value gets selected dropdown option.
