//basic object
let user = {
  name: "Kipkirui",
  age: 19,
  country: "Kenya",
};

console.log(user);

//accessing values - dot notation
console.log(user.name);
console.log(user.age);

//accessing values - bracket notation
console.log(user["country"]);

//changing values
user.age = 20;

console.log(user.age);

//adding new skill
user.skill = "JavaScript";

console.log(user);

//object with function(method)
let car = {
  brand: "Toyota",
  model: "Supra",

  start: function () {
    console.log("Car started 🚗");
  },
};

car.start();

// MINI CHALLENGE
// Create object for:

// your laptop
// your dream car
// your favorite football player

// Add:

// properties
// one method

let laptop = {
  Device_name: "bitcranker",
  Processor: "Intel(R) Core(TM) i5-7300U CPU @ 2.60GHz   2.71 GHz",
  Installed: "RAM	8.00 GB (7.38 GB usable)",
  System_type: "64-bit operating system, x64-based processor",
  Pen_and_touch: "Touch support with 10 touch points",
};
console.log(laptop);

let A7 = {
  exterrior:
    "Elegant, coupe-like silhouette with a prominent Singleframe grille and LED headlights.",
  interior:
    " Luxurious cabin with high-quality materials, advanced infotainment system, and spacious seating.",
  engineOptions:
    "Turbocharged V6, V8 engines, and hybrid variants offering a range of power and efficiency.",
  performance:
    "Smooth handling with quattro all-wheel drive available on many models, and adaptive air suspension for a comfortable ride.",
  technoloogy:
    "Digital cockpit, MMI touch response system, driver-assistance features like adaptive cruise control, lane assist, and parking assist.",
  dimensions:
    " Length approximately 16.4 feet, width around 6.3 feet, and a spacious cargo area.",
};
console.log(A7);

let messi = {
  FullName: "Lionel Andrés Messi",
  Position:
    "Forward, primarily plays as a right winger or attacking midfielder",
  PlayingStyle:
    "Known for exceptional dribbling, close control, agility, and vision on the field",
  Skills:
    " Outstanding ball mastery, quick acceleration, precise passing, and goal-scoring ability",
  CareerHighlights:
    " Multiple Ballon d'Or awards, record goal scorer for FC Barcelona and Argentina",
  PhysicalAttributes:
    "Height around 1.70 meters (5 ft 7 in), agile and low center of gravity for balance",
  Clubs:
    " Notably FC Barcelona, Paris Saint-Germain, and the Argentina national team",
  OfftheField: "Recognized for humility, sportsmanship, and philanthropic work",
};
console.log(messi);