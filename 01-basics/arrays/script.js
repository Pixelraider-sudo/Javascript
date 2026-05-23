//forEach()-used to loop through arrays.
//syntax
array.forEach(function (item) {
  // code
});
//example
let games = ["eFootball", "Valorant", "FIFA"];

games.forEach(function (game) {
  console.log(game);
});

//map()-creates a new transformed array
//syntax
let games = ["eFootball", "Valorant", "FIFA"];

games.forEach(function (game) {
  console.log(game);
});
//example
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

//filter()-keeps items matching in a condition 
//syntax
array.filter(function(item) {
    return condition;
});

//example
let scores = [30, 80, 55, 90, 40];

let passed = scores.filter(function(score) {
    return score >= 50;
});

console.log(passed);

//find-gets the first matching element 
//syntax
array.find(function(item) {
    return condition;
});

//example
let users = ["John", "Jane", "Pixel"];

let result = users.find(function(user) {
    return user === "Pixel";
});

console.log(result);

// MINI CHALLENGE
// Try:
// use map() to square numbers
// use filter() to get odd numbers
// use find() to search your favorite game
// use forEach() to print foods

let numbers=[1,2,3,4,5];

let squared=numbers.map(function(number){
    return number*number;
});

console.log(squared);


let digits = [1,2,3,4,5,6,7,8,9,10];

let odd =digits.filter(function(digit){
       return digit %2==1;
});
console.log(odd);


let games=["forlan","gaucho","zico","raul","frank","alonso","kounde"];

let favGame=games.find(function(game){
    return game===forlan;
});
console.log(favGame);

let foods=["chapati","andazi","nuckles","wings","milk","onions","sald","sprinkles","avocado","thath"];

foods.forEach(function(food){
    console.log(food);
});