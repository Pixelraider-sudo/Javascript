// let button = document.getElementById("btn");
// let colorName = document.getElementById("color-name");

// let colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "purple",
//   "orange",
//   "pink",
//   "cyan",
//   "magenta",
// ];

// button.onclick = function () {
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
//     document.body.style.backgroundColor = randomColor;
//     colorName.textContent = randomColor;

// };

//math.random() generates a random number between 0 (inclusive) and 1 (exclusive).//genertaes random decimal
//math.floor() rounds a number down to the nearest integer.//rounds dowm
//colors[randomIndex] accesses the color at the randomly generated index in the colors array.//accesses the color at the random index

// MINI CHALLENGE 😈
// Try:
// add 20 colors
// change text color too
// show:
// Current Color: red
// make button also change color

let button = document.getElementById("btn");
let colorName = document.getElementById("color-name");

let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "brown",
  "gray",
  "black",
  "white",
  "teal",
  "navy",
  "maroon",
  "olive",
  "lime",
  "indigo",
  "violet",
  "gold",
];

button.onclick = function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = "Current Color: " + randomColor;
    colorName.style.color = randomColor;
    button.style.backgroundColor = randomColor;
    button.style.color = "white";
};