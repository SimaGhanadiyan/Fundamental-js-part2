'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  /*ES5:
   numPassengers = numPassengers || 1;
   price = price || 199;*/

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('lh123');
createBooking('lh123', 2, 800);
createBooking('lh123', 2);

const flight = 'LH234';

const sima = {
  name: 'sima ghanadiyan',
  passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'miss.' + passenger;
  if (passenger.passport === 12345678) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, sima);
console.log(flight);
console.log(sima);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(sima);
