// ARITHMETIC OPERATORS

let a = 20;
let b = 5;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus gets the remainder 

// ASSIGNMENT OPERATORS

let score = 10;

score += 5;

console.log(score);

// COMPARISON OPERATORS

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a == b);
console.log(a != b);

// STRICT EQUALITY

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// LOGICAL OPERATORS

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

// challenge
// Create variables:
// mathScore
// englishScore

// Then:

// add them
// compare them
// check which is bigger
// use ===
// use logical operators
let mathScore= 90;
let englishScore=70;

console.log(mathScore+englishScore);
console.log(mathScore==englishScore);
console.log(mathScore>englishScore);
console.log(mathScore ===englishScore);
console.log(mathScore != englishScore);