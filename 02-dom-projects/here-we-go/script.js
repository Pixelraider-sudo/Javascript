let clock = document.getElementById("clock");
let greeting = document.getElementById("greeting");
let quote = document.getElementById("quote");

let quoteBtn = document.getElementById("quoteBtn");
let themeBtn = document.getElementById("themeBtn");

let quotes = [
  "Keep going and never give up",
  "You are getting better every day",
  "Code. Break. Fix. Repeat.",
  "Discipline beats motivation",
  "Small steps = big results",
];

// CLOCK
function updateClock() {
  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  clock.textContent = `${h}:${m}:${s}`;

  if (h < 12) greeting.textContent = "Good Morning ";
  else if (h < 18) greeting.textContent = "Good Afternoon ";
  else greeting.textContent = "Good Evening ";
}

setInterval(updateClock, 1000);
updateClock();

// QUOTE BUTTON
quoteBtn.onclick = function () {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
};

// THEME TOGGLE
themeBtn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.style.background = "#111";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "#e17f7f";
    document.body.style.color = "black";
  }
};
