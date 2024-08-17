/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days
21ºC in 2 days 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the
console.

Use the problem-solving framework: Understand the
problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]Ĭ
*/

//1. A function which takes an array

// const printForecast = function (arr) {
//   //2. TO log the strig like above we first need to run a loop through the arr parameter and take out each value and then we should take its index as well.
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]} in ${i + 1}`);
//   }
// };
// console.log(printForecast([17, 21, 23]));
