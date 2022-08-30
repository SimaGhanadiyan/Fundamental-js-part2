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

//Array
const friend1 = "Michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["Michael", "steven", "peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);
console.log(year);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge4 = function (birthYears) {
  return 2037 - birthYears;
};
const years = [1990, 1967, 2002, 2010, 2018];