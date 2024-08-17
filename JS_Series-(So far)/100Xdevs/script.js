// //Typescript
// //Parse it to a number
// function sum(a,b){
//   return a+b;
// }

// let result = sum(2,3)
// console.log(result);

// function sum(n){
//   let ans = 0
//   for(let  i=0; i<=n; i++){
//     ans = ans + i
//   }
//   return ans;
// }
// console.log(sum(5));

const fs = require("fs");
function read(err, data){
  if(err){
    console.log(data);
  }
  else{
    console.log(data);
  }
}

fs.readFile("aas.txt", "utf-8", print);
// const contentsA = fs.readFile("a.txt", "utf-8", read);
// const contentsb = fs.readFile("b.txt", "utf-8", read);
console.log("done!");
// console.log(contentsb);
