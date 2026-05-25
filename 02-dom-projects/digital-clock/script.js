// let clock = document.getElementById("clock");
// function updateClock() {
//   let now = new Date(); //gets the current time/date form the computer
//   let hours = now.getHours(); //gets hours
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   //adding leading zeros
//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   clock.textContent = hours + ":" + minutes + ":" + seconds;
// }
// //run every second
// setInterval(updateClock, 1000); //runs the code repeatedly every 1000 milliseconds (1 second)

// //run immediately to avoid delay
// updateClock();

// MINI CHALLENGE
// Try:

// show AM / PM
// change background at night
// add current date
// make clock glow with CSS

// add greeting:

// Good Morning

let clock1 = document.getElementById("clocki");
let greeting = document.getElementById("greeting");

function updateclock1() {
    // console.log("running ");
  let now = new Date();

  let hourNumber = now.getHours();

  let hours = hourNumber;

  let minutes = now.getMinutes();

  let seconds = now.getSeconds();

  let period = hourNumber >= 12 ? "PM" : "AM";

  // adding leading zeros
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //greeting based on time of day
  if (hourNumber < 12) {
    greeting.textContent = "Good Morning";
  } else if (hourNumber < 18) {
    greeting.textContent = "Good Afternoon";
  } else {
    greeting.textContent = "Good Evening";
  }

  //background and text color change based on time of day

  if (hourNumber >= 18 || hourNumber < 6) {
    document.body.style.backgroundColor = "#2c3e50";

    clock1.style.color = "#ecf0f1";

    greeting.style.color = "#ecf0f1";
  } else {
    document.body.style.backgroundColor = "#ecf0f1";

    clock1.style.color = "#2c3e50";

    greeting.style.color = "#2c3e50";
  }
  // UPDATE CLOCK
  clock1.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
}

//makes it run repeatedly every second
setInterval(updateclock1, 1000);

//runs immediately to avoid delay
updateclock1();
