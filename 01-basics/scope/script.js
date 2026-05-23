//GLOBAL SCOPE -variable accessibke everywhere
let username = "Kipkirui";

function showUser() {
  console.log(username);
}

showUser();

console.log(username);

//function can access it and outside code can access it .

//LOCAL SCOPE /FUNCTION SCOPE - variable only exists inside function
function test() {
  let message = "Hello";

  console.log(message);
}

test();
//console.log(message); error -message is not defined 

//BLOCK SCOPE let AND const. - variables inside {} stay inside

if (true) {
  let age = 19;

  console.log(age);
}
//this works but console.log(age); brings and error 

//var VS  let 
if (true) {
    var country = "Kenya";
}

console.log(country);//works(var leaks outside block)

if (true) {
    let city = "Nairobi";
}

console.log(city);//error


// MINI CHALLENGE
// Try:
// create global variable
// create local variable inside function
// create block variable inside if
// try accessing them outside
// observe which ones fail

// Scope helps:

// prevent bugs
// avoid variable conflicts
// protect data
// organize programs

