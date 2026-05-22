//basic if else

let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// if else if else
let score = 75;

if (score >= 80) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//real life condition
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in");
}
// logicial operator or multiple condtions
let age2 = 20;
let hasID = true;

if (age2 >= 18 && hasID) {
  console.log("You can enter");
} else {
  console.log("Access denied");
}

// Create:
// let password = "1234";

// Then:

// if password is "1234" → print "Access granted"
// else → print "Wrong password"

let password ="1234";

if (password="1234"){
    console.log("Acess Granted!!");
}
else{
    console.log("Wrong Password");
}

//Smart logic 

let temperature = 30;

if (temperature > 35) {
    console.log("Too hot 🔥");
} else if (temperature >= 20) {
    console.log("Normal weather 🙂");
} else {
    console.log("Cold 🥶");
}