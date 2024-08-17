'use strict';
// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   // console.log(this);
// };
// calcAge(1991);
// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
//   // console.log(this);
// };
// calcAgeArrow(1991);

// const avi = {
//   year: 2005,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// avi.calcAge();

// const matilda = {
//   year:2017,
// };
// matilda.calcAge = avi.calcAge;
// matilda.calcAge();

// const f = avi.calcAge;
// f()
// // var firstName = 'Matilda';

// const avi = {
//   firstName: 'Avi',
//   year: 2005,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet:()=>{
//          console.log(this)
//          console.log(`Hey ${this.firstName}`)
// }
// }
// avi.greet()

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Avi', 
//   age : 30,
// }
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'William',
  age:27,
};
const marriedjessica = jessica;
marriedjessica.lastName = 'Davis';
console.log('Before');