"use strict";
/*
// Strict mode
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

// const interface = 'Audio';
// const private = 232;
*/

//Functions
/*
function logger(){
  console.log('My name is Avi');
}
//Calling/running/invoking the function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
  const juice= `Juice with ${apples} apples ${oranges} oranges.`;
  return juice;
}
  

const juiceProcessor = fruitProcessor(3,4);
console.log(juiceProcessor);

function footballPlayers(player1, player2, player3){
  const players = `The top players this season were ${player1}, ${player2}, ${player3}`
  return players;
}

const topPlayers =  footballPlayers('Cristiano ronaldo', 'messi', 'neymar' )
console.log(topPlayers);
*/

//Function declarations VS Function Expressions
/*
//function declaration
function calcAge1(birthYear){ 
  return 2050 - birthYear;
}
const age1 = calcAge1(2005);


//function expression
const calAge2 = function (birthYear) {
  return 2050 - birthYear;
}
const age2 = calAge2(2005)
console.log(age1, age2);
*/

//Arrow functions
/*
const calcAge3 = birthYear => 2040 - birthYear;
const age3 = calcAge3(2005)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024-birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2005, 'Avi')); 
console.log(yearsUntilRetirement(2003, 'bob')); 
*/

//Function caling other functions

/*
function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples,oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges)
  const juice= `Juice with ${applePieces} pieces apple ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2,3)); 
*/
/*
const calcAge = function(birthYear){
  return 2050 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName){
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  }else{
    console.log(`${firstName} has already retired`);
    return -1
  }
}
console.log(yearsUntilRetirement(1923, 'Avi'))
*/

//Arrays
/*
const friends = ['Michael','Steven', 'Peter'];
console.log(friends);

const years0 = new Array(2005, 2006,2007,2008);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Avi'
const avi = [firstName , 'Shukla', 2037 - 2005, 'Student', friends];
console.log(avi);
console.log(avi.length);

//Excercise

const calcAge = function (birthYear) {
  return 2050 - birthYear;
}
const years = [2005,2006,2007,2008];

const age1 = calcAge(years[0]); 
const age2 = calcAge(years[1]); 
const age3 = calcAge(years[years.length-1]); 
console.log(age1, age2 ,age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];

console.log(ages);
*/

//Array methods

/*
const friends = ['Michael', 'Steven', 'Peter'];
//Adding elements
const new_length = friends.push('Jay');
console.log(new_length);
console.log(friends);

friends.unshift('John');
console.log(friends);

//Removing elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
  console.log('You have a friend, Steven');
};
*/

//Objects
/*
const avi = {
  firstName: 'Avi',
  lastName:'Shukla',
  age:2024 - 2005,
  job:'Student',
  friends:['Michael', 'Peter', 'Steven']
};
*/

//Dot VS Bracket Notations
/*
const avi = {
  firstName: "Avi",
  lastName: "Shukla",
  age: 2024 - 2005,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(avi);
console.log(avi.lastName);
console.log(avi["lastName"]);

const namKey = "Name";
console.log(avi["first" + namKey]);
console.log(avi["last" + namKey]);

// const interestedIn = prompt("What do you want to know about Avi?");

// if (avi[interestedIn]) {
//   console.log(avi[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

avi.location = "India";
avi["twitter"] = "@Circuit_Sage";
console.log(avi);

console.log(`${avi.firstName} has ${avi.friends.length} friends, and his best friend is called ${avi.friends[0]} `);
*/

//Object methods
/*
const avi = {
  firstName: "Avi",
  lastName: "Shukla",
  birthYear:2005,
  age: 2024 - 2005,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function(birthYear){
  //   return 2024 - birthYear;
  // }

  // calcAge: function(){
  //   // console.log(this);
  //   return 2024 - this.birthYear;

     calcAge: function(){
      this.age = 2024 - this.birthYear;
      return this.age;
     },

     driversLicense: function(){
     if(this.hasDriversLicense){
      return 'a';
     }else{
      return 'no'
     }
     }

};
console.log(avi.age);
console.log(avi.age);
console.log(avi.age);

console.log(`${avi.firstName} is a ${avi.age}-year old student, ${avi.driversLicense()} driver's license.`);
*/

//For loop
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');

//for loops keep running while condition is true
for(let rep = 1; rep <= 30; rep ++ ){
  console.log(`Lifting weights repetition ${rep}`);
};
*/

//Looping Arrays, Breaking and Continuing

/*
const avi = [
  "Avi",
  "Shukla",
  2024 - 2005,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for(let i = 0; i<avi.length ;i++){
  //Reading from avi array
  console.log(avi[i], typeof avi[i]);
  
  //Filling array
  // types[i] = typeof avi[i];

  types.push(typeof avi[i])
}
console.log(types);

const years = [2005, 2006, 2007, 2008];

const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2024-years[i]);
}
console.log(ages);

//continue and break
console.log('---ONLY STRING');
for(let i = 0; i<avi.length ;i++){

  if(typeof avi[i] !== 'string') continue;
  console.log(avi[i], typeof avi[i]); 
}

console.log('---BRETA WITH NUMBER');
for(let i = 0; i<avi.length ;i++){

  if(typeof avi[i] === 'number') break;
  console.log(avi[i], typeof avi[i]); }

  const tyler = [
    "Tyler",
    "Krueger",
    2020 - 1992,
    "SEO Specialist",
    ["Jens", "Jason", "Ian"]
];
 
console.log("ONLY PRINT STRINGS");
for (let i = 0; i < tyler.length; i++) {

 console.log(tyler[i], typeof tyler[i]);
}
 */

//Looping backwards and nested loops
/*
const avi = [
  "Avi",
  "Shukla",
  2024 - 2005,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

for(let i = avi.length-1; i>=0 ; i--){
  console.log(i, avi[i]);
}

for(let excercise = 1; excercise < 4 ; excercise++){
  console.log(`------Starting excercise ${excercise}`);

  for(let rep =1; rep<6 ; rep++){
    console.log(`Lifing weight repetition ${rep}`);
  }
}
  */

//While loop
/*
// for loops keep running while condition is true
// for(let rep = 1; rep <= 30; rep ++ ){
//   console.log(`Lifting weights repetition ${rep}`);
// };

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/