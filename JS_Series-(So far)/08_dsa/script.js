'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES 6 enhanced obj literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(Ing1, Ing2, Ing3) {
    console.log(`Here is your delicious Pasta with ${Ing1}, ${Ing2}, ${Ing3}`);
  },
  orderPizza(mainIngrediend, ...otherIngredients) {
    console.log(mainIngrediend);
    console.log(otherIngredients);
  },
};

/*
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//With optional chaining
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for(const day of days){
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open} `);
}

//Methods

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

//Arrays
const users = [ 
  {name:'avi' , email:'abc@getNamedMiddlewareRegex.com'}
];
console.log(users[0].name ?? 'User array empty');
*/
// console.log(restaurant.openingHours.mon.open);

//With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant);
// restaurant.orderPizza('mushrooms', 'onion', 'olives','spinach')
// restaurant.orderPizza('mushrooms')
/*
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//objects spread

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante roma'
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/
/*
restaurant.orderDelivery({
  time:'22.30',
  address:'Via del Sole, 21',
  mainIndex:2,
  starterIndex:2,
});
restaurant.orderDelivery({
  address:'Via del Sole, 21',
  starterIndex:2,
})
*/

//    DESTRUCTURING ARRAYS
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Return 2 returned values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i , ,[j ,k]] = nested;
console.log(i,j,k);

//Deafault values
const [p = 1,q = 1,r = 1] = [8,9];
console.log(p,q,r);
*/

//DESTRUCTURING OBJECTS
/*
const { name, openingHours, categories } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);

//Nested objects

const {
  fri: { open : o, close: c },
} = openingHours;
console.log(o, c);
*/

//SPREAD OPERATOR

// const arr = [7, 8, 9];
// const badNewarr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewarr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables are arrays, strings , maps , sets .NOT Objects

// const str = 'Avi';
// const letters = [...str, ' ', 'S'];
// console.log(letters);
// console.log(...str);

/*
// The Rest Patterns

//1. Destructuring

//Spread: because of right side of =
const arr = [1, 2, ...[3, 4]];

//Rest: because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2 Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3, 5, 6);
add(2, 3);
add(2, 3, 8, 9)

const x  = [2,4,43,2];
add(...x);
*/

/*
//Short circuiting (&& and ||)
//OR
//Use data type, return any datatype, short circuiting
console.log(3 || 'Avi');
console.log('' || 'Avi' || true || 0 || undefined || null);

console.log(undefined || 0 || '' ||'hello'|| 23|| null);

restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//AND
console.log(0 && 'Avi');
console.log(7 && 'Avi');
console.log('Hello' && 23 && null && 'Avi');
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

//The Nullish Coalescing operator

// restaurant.numGuests = 0
// const guests = restaurant.numGuests ? restaurant.numGuests :10;
// console.log(guests);

// const guessCorrect = restaurant.numGuests ?? 10;
// console.log(guessCorrect);

//Logical Assignment operator

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //OR assignment
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10
// // rest2.numGuests ||= 10

// //
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

// rest1.owner && '<ANONYMOUS>'
// console.log(rest1);
// console.log(rest2);

//For of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*
//Enhanced object literals
const properties = Object.keys(openingHours);

 let openStr =` We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)){
  openStr += `${day}, `;
}
console.log(openStr);

const  values = Object.values(openingHours);
console.log(values);

//Entire objects
const entries = Object.entries(openingHours);
// console.log(entries);

for(const [key,{open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
  */

/*
// Sets
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);

console.log(new Set('Avi'));

console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));

ordersSet.add('Garlic bread')
console.log(ordersSet);
ordersSet.delete('risotto');
console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);

for(const order of ordersSet) console.log(order);


//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique); 
*/

// Maps
/*
const rest = new Map();
rest.set('name', 'Mahesh rest');
rest.set(1, 'Chungi, Sitapur');
console.log(rest.set(2, 'lal bagh, Sitapur'));

rest
  .set('categories', ['chole', 'paneer', 'chawal'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2)
// rest.clear()
console.log(rest);
console.log(rest.size);
rest.set(document.querySelector('h1'), 'Heading')
const arr =[1,2]
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get(arr));
*/

/*
//Maps iteration

const question = new Map([
  ['Question', 'Whatis the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!~'],
  [false, 'Try again!'],
]);
console.log(question);

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const Answer = Number(prompt('Your answer'));
console.log(Answer);

console.log(question.get(question.get('correct') === Answer));

//converting map to array
console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
*/

/*
//Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') +1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got middle seat');
  }
  else{
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')
*/

/*
//Working with Strings

const airline = 'TAP Air Portugal'

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIx capitalization in name

const passenger = 'aViS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email

const email = 'hello@avi.io' 
const loginEmail = '  Hello@Avi.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim()
console.log(normalEmail);


//replacing

const priceGB = '288,97$';
const priceUS = priceGB.replace('$','%').replace(',','.')
console.log(priceUS);


const announcement =
'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement. replaceAll('door', 'gate'));

console.log(announcement. replaceAll(/door/g, 'gate'));

//Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('AIb'));
console.log(plane.startsWith('AIb'));

*/

//Working with strings

//Split and join
// console.log('a+very+nice string'.split('+'));
// console.log('Avi Shukla'.split(' '));


// console.log('a+sjs+siks+issk'.split('+'));




// const [firstName,lastName] = 'Avi Shukla'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const  capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = []
//   for(const n of names){
//    const new1 = n.replace(n[0], n[0].toUpperCase())
//   }
//   console.log(new1.join(' '));
// }
// capitalizeName('jesscia ann smith davis')
// const passenger = 'jesscia ann smith davis';





























































































































































































































































































































































































































































































