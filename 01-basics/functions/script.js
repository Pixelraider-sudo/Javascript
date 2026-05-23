//basic function
function greet() {
  console.log("Hello Kipkirui");
}

greet();

//function with parameters
function greetUser(name) {
  console.log("Hello " + name);
}

greetUser("John");
greetUser("Jane");

//multiple parameters
function add(a, b) {
  console.log(a + b);
}

add(5, 10);
add(20, 30);

//return values
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);

//real life application
function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEven(10));
console.log(isEven(7));

//note
// function-reusable block of code
// parameter-input to function
// return-output from function

// MINI CHALLENGE
// Create functions for:
// multiply 3 numbers
// check if number is positive or negative
// convert Celsius to Fahrenheit

function num(a,b,c){
    return a*b*c;
}

let product = num(2,2,2);
console.log(product);

function num(n){
    if(n>0){
       console.log("Number is positive");
    }
    else{
        console.log("number is negative");
    }
}

num(24);

function deg(m){

    return m*9/5;
}
let fanherit=deg(23);
console.log(fanherit);