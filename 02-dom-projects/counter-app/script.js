let count = 0;

let countDisplay = document.getElementById("count");
let incrementBtn = document.getElementById("increase");
let decrementBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

//on increase button click
incrementBtn.onclick = function () {
  count++;
  countDisplay.textContent = count;
};

//on decrease button click
decrementBtn.onclick = function () {
  count--;
  countDisplay.textContent = count;
};

//on reset button click
resetBtn.onclick = function () {
  count = 0;
  countDisplay.textContent = count;
};

let moves = 0;

let incrementBtn2 = document.getElementById("increased");
let decrementBtn2 = document.getElementById("decreased");
let resetBtn2 = document.getElementById("reset_it");
let movesDisplay = document.getElementById("moves");
let displayMessage = document.getElementById("moving");
let incre5 = document.getElementById("five");

//on increase button click
incrementBtn2.onclick = function () {
  if (moves < 10 && moves >= 0) {
    moves++;
    movesDisplay.textContent = moves;
    if (moves == 10) {
      displayMessage.textContent =
        "You have reached the maximum number of moves!";
    }
  }
    changeColor();
};

//on decrease button click
decrementBtn2.onclick = function () {
  if (moves > 0 && moves <= 10) {
    if (moves > 0) {
      moves--;
      movesDisplay.textContent = moves;
    }
  }

  changeColor();
};

//on reset button click
resetBtn2.onclick = function () {
  moves = 0;
  movesDisplay.textContent = moves;
  displayMessage.textContent = "";

  changeColor();
};

// +5 click
incre5.onclick = function () {
  if (moves < 10 && moves >= 0) {
    moves += 5;
    movesDisplay.textContent = moves;
    changeColor();
  }
};

function changeColor() {
  switch (moves) {
    case 0:
      document.body.style.backgroundColor = "green";
      break;

    case 1:
      document.body.style.backgroundColor = "blue";
      break;

    case 2:
      document.body.style.backgroundColor = "orange";
      break;

    case 3:
      document.body.style.backgroundColor = "purple";
      break;

    case 4:
      document.body.style.backgroundColor = "pink";
      break;

    case 5:
      document.body.style.backgroundColor = "grey";
      break;

    case 6:
      document.body.style.backgroundColor = "brown";
      break;

    case 7:
      document.body.style.backgroundColor = "cyan";
      break;

    case 8:
      document.body.style.backgroundColor = "lightblue";
      break;

    case 9:
      document.body.style.backgroundColor = "magenta";
      break;

    case 10:
      document.body.style.backgroundColor = "red";
      break;

    default:
      document.body.style.backgroundColor = "#5b1a1a";
  }
}
