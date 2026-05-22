//for loop
for (initialization; condition; increment) {
  // code
}

//example

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

//While loop
while (condition) {
  // code
}

//example
let i = 1;

while (i <= 5) {
  console.log("While loop:", i);
  i++;
}

//do while
do {
  // code
} while (condition);
let i = 1;

//example
let j = 1;

do {
  console.log("Do While:", j);
  j++;
} while (j <= 5);

//looping arrays
//example
let games = ["eFootball", "Valorant", "FIFA"];

for (let i = 0; i < games.length; i++) {
  // What let i means
  // i is just a counter variable
  // let means it exists only inside the loop
  // Think of it like:
  // “Create a temporary number that lives only while the loop runs”
  console.log(games[i]);
}

// MINI CHALLENGE
// Do this:

// Print numbers 1 to 10
// Print even numbers only
// Loop through your name letters
// Loop through favorite games array

let i;

for (i = 1; i <= 10; i++) {
  console.log(i);
}

let n;
for (n = 0; n <= 100; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

let name = "kipkirui john";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

let name = "kipkirui john";

for (let letter of name) {
  console.log(letter);
}

let games = ["forlan", "ronaldino", "zico", "raul", "alonso", "rijakrd"];

for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}
