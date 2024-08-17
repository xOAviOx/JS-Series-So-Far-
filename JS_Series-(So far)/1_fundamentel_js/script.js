/*let js = "amazing";
console.log(40 + 3 + 22);

console.log('Avi'); 
console.log(23); 

let firstName = 'Avi';

let first_person = "avi";
 

let myFirstJob = "Programmer";
let myCurrentJob ='Teacher';
console.log(myFirstJob + ","+myCurrentJob); */

// Data types

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 233);
// console.log(typeof 'Avi');

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2005;
console.log(typeof year);

console.log(typeof null);*/

//Let, Const & Var

/*let age = 19;
age = 20; 

const birthYear = 2005;
// birthYear=2006;
// const job;

var job = 'Programmer';
job= 'Teacher';*/

//Operators
/*
const now = 2037;
const ageAvi = now- 2005;
const ageSarah = now- 2018;
console.log(ageAvi,ageSarah);

console.log(ageAvi*2, ageAvi/2, 2**5);

const firstName = 'Avi';
const lastName = 'Shukla';
console.log(firstName +' '+lastName);

//Assignment operators
let x = 10+5; //!5
x+=10; //x= x+10 = 25
x*=4 // x = x*4
x++; //x  = x +1
x--;
x--; // x = x-1
console.log(x);

//Comparison operators
console.log(ageAvi>ageSarah);

const isFullAge = ageSarah>= 18;

console.log(now - 2005 > now - 2018);
*/
/*
let x,y;
x = y= 25-10-5; //x = y = 10 <--
console.log(x,y);

const now =2037;
const ageAvi = now- 2005;
const ageSarah = now- 2018;

const avgAge = ( ageAvi + ageSarah ) / 2;
console.log(ageAvi, ageSarah, avgAge);*/

/*
const firstName = 'Avi';
const job = 'teacher';
const birthYear = 2005;
const year = 2037;

const avi = "I'am "+ firstName + ', a ' +(year - birthYear) + ' years old ' + job + '!';
console.log(avi); 

const aviNew = `I'am ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(aviNew);

console.log(`Just a normal string...`);

console.log('String with \n\
multiple\n\
lines')
console.log(`String with
multiple
lines`);*/

//IF-ELSE
/*
const age = 14;
if(age >= 18) {
  console.log('Sarah can start driving🚗');
} else{
  const yearsLeft = 18-age;
  console.log(` Sarah is too young, wait another ${yearsLeft} years.`);
}

const birthYear= 2005;

let century;
if(birthYear>= 2000){
  century = 20;
}else{
  century = 21;
}
console.log(century);*/

//Type conversion and coercion
/*
//Conversion
const inputYear = "2005";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Avi" ));
console.log(typeof NaN);

console.log(String(123), 123);

//Coercion
console.log('I am ' +23 + ' years old');
console.log('23'-'10'-3);
console.log('23'+'10'+3);
console.log('23'*'2');
console.log('23'/'2'); */

//Truthy and falsy value --> 0 , '' ,undefined, null , NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Avi'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
  console.log("Dont spend it all");
}else{
  console.log("you should get a job");
}

let height = 0;
if(height){
  console.log('YAY! Height is defined');
}else{
  console.log('Height is undefined');
}
*/

//Equality operator
/*
const age = '18';

if(age===18)console.log('You just became an adult : (strict)');
if(age==18)console.log('You just became an adult : (loose)');

const favourite =Number(prompt("Whats your favourite number?"))
console.log(favourite);

if (favourite === 23){
  console.log('Cool! 23 is an amazing number!');
} else if(favourite===7) {
  console.log('7 is also a cool number');
}else{
  console.log('Number is not 23 or 7');
}*/

//Logical operator
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
*/
// if(shouldDrive){
//   console.log('Sarah is able to drive');
// }else{
//   console.log('Someone else should drive');
// }
/*
const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive');
}else{
  console.log('Someone else should drive');
}
*/

//Switch day

// const day = 'monday';
// switch(day){
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// const day= 'monday';

/*
const day = 'thursday';
if(day=== 'monday'){
  console.log('Plan course structure');
  console.log('Go to coding meetup');
}else if(day==='tuesday'){
  console.log('Prepare theory videos');
}else if(day==='wednesday' || day ==='thursday'){
  console.log('Write code examples');
}else if(day==='friday'){
  console.log('Record videos');
}else if(day==='saturday' || day === 'sunday'){
  console.log('Enjoy the weekend');
}else{
  console.log('Not a valid day!');
}*/
