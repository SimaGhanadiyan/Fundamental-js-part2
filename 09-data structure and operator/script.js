'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//
//seperate part:this part is for practice consept

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];
const [x, y, z] = arr; //beacuse a b c is already taken
console.log(x, y, z);

//nested mean one array inside another array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9]; //useful when we get data from API
console.log(p, q, r);

//
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

  orderDelivery: function ({ starterIndex, mainIndex, time, object }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]}and ${this.mainMenu[mainIndex]} will be deliverd  at the ${time}`
    );
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

//switching variables:
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

/* switching variables :
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);*/

//recieve two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
console.log(restaurant.order(2, 0));

//fundamental destructuring objects:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//what if we wanted variable names to differnt from property object

const {
  name: restuarantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restuarantName, hours, tags);

const { menu = [], starterMenu: start = [] } = restaurant;
console.log(menu, start);

//mutating variable when we destrcturing object:
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, h: 14 };
({ d, e } = obj);
console.log(d, e);

//nested object
const {
  fri: { open = 0, close = c },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '23:30',
  address: 'via del sol 21',
  mainIndex: 2,
  starterIndex: 2,
});
