'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//seperate part:
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);
//default values
const [p = 1, q = 1, r = 1] = [8, 9]; //useful when we get data from API
console.log(p, q, r);
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [first, second] = restaurant.categories; //only takes two element
const [avali, , sevomi] = restaurant.categories;
console.log(avali, sevomi); //this way we can skip second element
console.log(first, second);
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
//we would first start by creating new array with two variable in it
[main, secondary] = [secondary, main];
console.log(main, secondary);
/*const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);*/

//recieve two return values from a function
const [starter, maiin] = restaurant.order(2, 0);
console.log(starter, maiin);
console.log(restaurant.order(2, 0));
