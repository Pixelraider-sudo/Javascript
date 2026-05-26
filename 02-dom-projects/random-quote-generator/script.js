// let quoteText = document.getElementById("quote");
// let button = document.getElementById("btn");

// let quotes = [
//   "Consistency beats motivation.",

//   "Code. Break. Debug. Repeat.",

//   "Small progress is still progress.",

//   "Discipline creates freedom.",

//   "Great developers debug patiently.",

//   "Dream big. Build bigger.",
// ];

// button.onclick = function () {
//     let randomIndex = Math.floor(Math.random() * quotes.length);

//     let randomQuote = quotes[randomIndex];

//     quoteText.textContent = randomQuote;
// };

// MINI CHALLENGE
// Try:
// add 20 quotes
// change background randomly
// add author names
// add fade animation with CSS
// prevent same quote twice in a row

let button1 = document.getElementById("btn1");
let quoteText1 = document.getElementById("quote1");
let quoteAuthor1 = document.getElementById("author1");

let colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#33FFF6",
  "#F6FF33",
  "#FF8C33",
  "#8C33FF",
  "#33FF8C",
  "#FF3380",
  "#3380FF",
  "#80FF33",
  "#FF8033",
];
let authors = [
  "Author 1",
  "Author 2",
  "Author 3",
  "Author 4",
  "Author 5",
  "Author 6",
  "Author 7",
  "Author 8",
  "Author 9",
  "Author 10",
  "Author 11",
  "Author 12",
  "Author 13",
  "Author 14",
  "Author 15",
  "Author 16",
  "Author 17",
  "Author 18",
  "Author 19",
  "Author 20",
  "Author 21",
  "Author 22",
];
let quotes1 = [
  "Performance & PowertrainEngine: 3.0-liter turbocharged V6",
  "Horsepower: \(335 \text{ hp}\) @ 5,000 rpm",
  "Torque: \(369 \text{ lb-ft}\) @ 1,370 rpm",
  "Transmission: 7-speed automatic (S tronic)",
  "Drivetrain: quattro® all-wheel drive with ultra technology",
  "Acceleration: 0 to 60 mph in roughly 5.2 seconds",
  "Hybrid System: 48-volt Mild Hybrid Electric Vehicle (MHEV) technology",
  "Dimensions & WeightOverall Length: 195.6 inches (4,969 mm)",
  "Overall Width (with mirrors): 83.0 inches (2,108 mm)",
  "Overall Height: 56.0 inches (1,422 mm)",
  "Wheelbase: 115.2 inches (2,926 mm)",
  "Curb Weight: ~4,200 lbs (1,905 kg)",
  "Cargo Capacity: 24.9 cubic feet behind rear seats",
  "Exterior & Design",
  "Tailgate: Powered, hands-free Sportback liftgate",
  "Lighting: Adaptive LED headlights and continuous LED light bar taillights",
  "Aerodynamics: Speed-activated, retractable rear spoiler",
  "Standard Wheels: 19-inch 5-arm Y-design alloy wheels",
  "Interior & Technology",
  "Infotainment: Dual MMI touch response screens (10.1-inch upper, 8.6-inch lower)",
  "Audio: 10-speaker Audi sound system (upgradeable to Bang & Olufsen 3D)",
  "Seating: Leather upholstery with heated 8-way power front seats and memory setting",
];

button1.onclick = function () {
  let randomIndex1 = Math.floor(Math.random() * quotes1.length);
  let randomQuote1 = quotes1[randomIndex1];
  quoteText1.textContent = randomQuote1;
  quoteAuthor1.textContent = authors[randomIndex1];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
};
