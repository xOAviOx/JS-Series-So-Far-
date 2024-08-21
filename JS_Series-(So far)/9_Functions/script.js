'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 6);
*/

/*
const flight = 'LH234';
const avi = {
  name: 'Avi Shukla',
  passport: 243527382,
};
const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr.' + passenger.name);

  if (passenger.passport === 243527382) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};
// checkIn(flight, avi);
// console.log(flight);
// console.log(avi);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(avi);
checkIn(flight, avi);

//Js doesnt pass by references
*/

/*
//First class and Higher order functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('🥳');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

//Functions Returning Functions
// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }
// const greeterHey = greet('Hey');
// greeterHey('Avi');
// greeterHey('Steven')

//Above function as arrow function
// const greet =(greeting)=>name=>console.log(`${greeting}! ${name}`);
// greet('Hey')('avi')

/*
//The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Avi Shukla');
lufthansa.book(223, 'John smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Doesnt work
// book(23, 'Sarah williams')

book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary cooper');

const swiss = {
  airline: 'Swiss air line',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 32, 'William Lin');

//Apply method

const flihtData = [538, 'George Cooper'];
book.apply(swiss, flihtData);
console.log(swiss);

book.call(swiss, ...flihtData);

//The bind Method
//book.call(eurowings,23,'Sarah williams')
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Avi shukla');
bookEW23('Martha Cooper');

//With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  //Partial application
  const addTax = (rate, value)=> value + value * rate;
  console.log(addTax(0.1,200));
  
  const addVAT = addTax.bind(null, 0.23);

  console.log(addVAT(100));
  console.log(addVAT(23));

  const addVAT2 = function(rate){
    return addTax2 = (rate, value)=> value + value * rate;
  };*/

//CODING CHALLENGE

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// poll.registerNewAnswers = function () {
//   const choice = Number(
//     prompt(`What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++`)
//   );
//   return function () {
//     poll.answers[choice] += 1;
//     console.log(poll.answers);
//   };
// };

// poll.registerNewAnswers();

//IIFE

// const runOnce = function(){
//   console.log('this will never run again');
// };
// runOnce();
// (function(){
//   console.log('this will never run again');
//   const isPrivate = 23;
// })();
// (()=>   console.log('this will never run again'))
// ();


// {
//   const isPrivate =23
//   var notPrivate =43
// }
// console.log(notPrivate);

//------CLOSURES-------

// const secureBooking = function(){
//   let passengerCount = 0;

//   return function(){
//     passengerCount++
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker()