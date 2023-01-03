"use strict";

//Function
function logger() {
  console.log("my name is sima");
}
//runing /calling /invoking function
logger();
logger();
logger();

//Function declration
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces}  pieces of apples and ${orangePieces} pieces oranges.`;
  return juice;
}
fruitProcessor(2, 3);
console.log(fruitProcessor(2, 3));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age; // or return 2037-birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎉`);
    return 9999;
  }
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Bob"));

//Challenge#1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAge(5, 3, 4));
const scoreDolhins = calcAverage(44, 23, 71);
const scorekoalas = calcAverage(65, 54, 49);
console.log(scoreDolhins, scorekoalas);

const checkWiner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win(${avgDolhins}vs${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolhins}`);
  } else {
    console.log(`No teams wins`);
  }
};
checkWiner(scoreDolhins, scorekoalas);

//Array
const friend1 = "Michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["Michael", "steven", "peter"];
console.log(friends);
console.log(friends.length);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);
//friens=["Bob","Alice"] incorrect

const sima = ["Sima", "Ghanadiyan", 2022 - 1997, "student", friends];
console.log(sima);
console.log(sima.length);

// Basic array operator #10
//Add element
const newLenght = friends.push("Bob");
console.log(friends);
console.log(newLenght);
friends.unshift("Jonas");
console.log(friends);
//Remove element
friends.pop(); // last element gone
const popped = friends.pop(); // Jay also gone
console.log(friends);
console.log(popped);
friends.shift(); // first element gone
console.log(friends);
console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("peter"));
console.log(friends.includes("Michael"));

if (friends.includes("Michael")) {
  console.log("you have a friend called Michael");
} else {
  console.log("you have not a friend called Michael");
}

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge4 = function (birthYears) {
  return 2037 - birthYears;
};
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge4(years));
const age4 = calcAge4(years[0]);
const age5 = calcAge4(years[1]);
const age6 = calcAge4(years[2]);
const age7 = calcAge4(years[years.length - 1]);
console.log(age4, age5, age6, age7);

const ages = [
  calcAge4(years[0]),
  calcAge4(years[1]),
  calcAge4(years[years.length - 1]),
];
console.log(ages);

// Challenge #2:
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//OBJECT
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter"],
];

/*const jonas = {
  firstName:'jonas',
  lastName:'schmedtmann',
  age:2037-1991;
  job:'teacher',
  friends:["Micheal", "Peter"],
  console.log(jonas),
}*/

const jonaas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  age: 1991,
  job: "teacher",
  friends: ["Micheal", "peter"],
  hasDriverLicense: false,
  /*calcAge: function (birthyear) {
    return 2037 - birthyear;
  }*/
  /*calcAge: function () {
    return 2037 - this.age;
  },*/
  calcAge: function () {
    this.birthyear = 2037 - this.age;
    return this.birthyear;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      jonaas.job
    } and he has ${this.hasDriverLicense ? "a" : "no"} driver license`;
  },
};
console.log(jonaas);
console.log(jonaas.lastName);
console.log(jonaas["lastName"]);
const nameKey = "Name";
console.log(jonaas["first" + nameKey]);
console.log(jonaas["last" + nameKey]);
// console.log(jonaas.calcAge(1991));
// console.log(jonaas["calcAge"](1991));
console.log(jonaas.calcAge());
console.log(jonaas.birthyear);

const interstedIn = prompt(
  "what do you want to know about jonas?choose between firstName,lastName,job,age and friends?"
);
/*console.log(jonaas.interstedIn);  undefined because there is not a property interstedIn*/

if (jonaas[interstedIn]) {
  console.log(jonaas[interstedIn]);
} else {
  console.log(
    "wrong requestchoose between firstName,lastName,job,age and friends?"
  );
}
jonaas.location = "portugal";
jonaas["twitter"] = "@jonasschmedtmann";
console.log(jonaas);

//Challenge: jonas has 2 friends and his best friend called Michael.
console.log(
  `${jonaas.firstName} has ${jonaas.friends.length} friends and his best friend called ${jonaas.friends[0]}`
);
//Challenge:jonas is a 46-year old teacher, and he has a driver license
console.log(jonaas.getSummery());

/*console.log("lifting weight repitition 1");
console.log("lifting weight repitition 2");
console.log("lifting weight repitition 3");
console.log("lifting weight repitition 4");
console.log("lifting weight repitition 5");
console.log("lifting weight repitition 6");
console.log("lifting weight repitition 7");
console.log("lifting weight repitition 8");
console.log("lifting weight repitition 9");
console.log("lifting weight repitition 10");*/

//for loops keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight repitition ${rep}`);
}

const alice = [
  "alice",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter"],
];
console.log(alice);
const types = [];
//for (let i = 0; i < 5; i++) {
//console.log(alice[i]);
// }

for (let i = 0; i < alice.length; i++) {
  console.log(alice[i], typeof alice[i]);
  // types[i] = typeof alice[i];
  types.push(typeof alice[i]);
}
console.log(types);

const year = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < year.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

//continue and break
for (let i = 0; i < alice.length; i++) {
  console.log(alice[i], typeof alice[i]);
}
