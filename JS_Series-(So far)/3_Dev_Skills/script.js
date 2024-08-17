// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM:
/*
// We work for a company building a smart home
thermometer. Our most recent task is this: "Given an
array of temperatures of one day, calculate the
temperature amplitude. Keep in mind that sometimes
there might be a sensor error."*/
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// // - What is temp amplitude? Answer: difference
// // between highest and lowest temperatures?
// // - Whats a sensor error? and what to do

// // - How to compute max and min temperatures?
// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - FInd max value in temp array
// // - Find min value in temp array
// // - Subtract min from max(amp) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i]
//     if(typeof curTemp!== 'number') continue;

//     if (curTemp > max) {
//       max =curTemp;
//   }
//     if (curTemp < min){
//       min =curTemp
//   }
//   }
//   return max - min
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius:',
//     value: 10,

//     //C) FIX
//     // value: Number(prompt('Degree celsius:')),
//   };
//   //B) FIND
//   console.log(measurement);
//   // console.table(measurement);

//   console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //A) IDENTIFY
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//     console.log(max, min);
//     return max - min;
//   }
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);
// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//   numbers.sort((a,b) => a-b);
//   console.log(numbers[0]+numbers[1]);
// }
// sumTwoSmallestNumbers([10,20,30,40,50,60])

//1. Replace Digits below 5 with 0
//2. Replace Digits above and equal to 5 with 1.
//3. Return the result
// function fakeBin(x){
//   let belowDigit = x.replace(/g/,'2', '0');
//   return belowDigit;
// }
// console.log(fakeBin('28793'))

//1. 