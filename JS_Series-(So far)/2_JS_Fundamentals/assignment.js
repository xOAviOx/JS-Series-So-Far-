//Assignment 1
/*
function describeCountry1(country, population, capitalCity) {
  console.log(
    `${country} has ${population} people and its capital city is ${capitalCity}.`
  );
}
describeCountry1("India", "1.32 billion", "New delhi");

function describeCountry(country, population, capitalCity) {
  const sentence = `${country} has ${population} people and its capital city is ${capitalCity}.`
  return sentence
} 
const theSentence = describeCountry("India", "1.32 billion", "New delhi");
console.log(theSentence);
*/

//Assignment 2
/*
function percentageOfTheWorld(population){
  const worldPopulation = 7900000000
  return (population/worldPopulation) * 100;
};

const India = percentageOfTheWorld(1425775850);
const America = percentageOfTheWorld(425775850);
const Russia = percentageOfTheWorld(125775850);

console.log(India,America,Russia);

const worldPopulation = 7900000000
const percentageOfTheWorld2 = function (population){
  const thePercentage = (population/worldPopulation)*100;
  return thePercentage;
}

const India1 = percentageOfTheWorld(5775850);
const America1 = percentageOfTheWorld(4775850);
const Russia1 = percentageOfTheWorld(175850);

console.log(India1,America1,Russia1);
*/

//Assignment 3
/*
const worldpopulation = 7900000000;
const percentageOfTheWorld = population => (population/worldpopulation)*100;

const India = percentageOfTheWorld(1425775850);
const America = percentageOfTheWorld(425775850);
const Russia = percentageOfTheWorld(125775850);

console.log(India, America, Russia);
*/

//Assignment 4
/*
function percentageOfTheWorld(population){
  return (population/7900000000)*100;
}
function describePopulation(country, population){
  return `${country} has ${population} people, which is about ${percentageOfTheWorld(population)} of the world.`;
}

const abc = describePopulation('india',1425775850 )
console.log(abc);
*/

//Assignment 5
/*
const worldpopulation = 7900000000;
const percentageOfTheWorld = population => (population/worldpopulation)*100;

const populations = [1425775850,425775850,125775850];

console.log(populations.length=== 4);

const percentages = [percentageOfTheWorld(populations[0]), percentageOfTheWorld(populations[1]) ,percentageOfTheWorld(populations[populations.length-1])];

console.log(percentages);
*/

//Assignment 6
/*
const neighbours = ['Pakistan', 'Nepal', "Sri Lanka",'Bhutan'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
  console.log('Probably not a central european country :D');
} else{
  console.log('Whatever');
};

neighbours[neighbours.indexOf('Pakistan')] = 'China';
console.log(neighbours);
*/

//Assignment 7
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: 'Hindi',
  population:'1.32 Billion',
  neighbours: ['Pakistan', 'Nepal', 'Sri Lanka']
};*/

//Assignment 8
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: 'Hindi',
  population: 1.32 ,
  neighbours: ['Pakistan', 'Nepal', 'Sri Lanka']
};

console.log(`${myCountry.country} has ${myCountry.population} billion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population']-=2;
console.log(myCountry['population']);
*/

//Assignment 9
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: 'Hindi',
  population: 1.32 ,
  neighbours: ['Pakistan', 'Nepal', 'Sri Lanka'],
  describe: function(){
    console.log(`${this.country} has ${this.population} billion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  chechIsIsland:function(){
    this.neighbours ? this.isIsland =true: this.isIsland = false;
    console.log(myCountry);
  }
};
myCountry.describe()
myCountry.chechIsIsland();
*/

//Assignment 10
/*
for(let i = 1; i<=50 ;i++){
  console.log(`Voter number ${i} is currently voting.`);
}
*/

//Assignment 11
/*
const populations = [1425775850,425775850,125775850];

percentages2=[];

for(let i = 0 ; i<populations.length; i++){
  percent = (populations[i]/79000000000)*100;
  percentages2.push(percent);
};
console.log(percentages2);
*/

//Assignment 12
/*
const countries = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < countries.length; i++){
  for(let j = 0; j< countries[i].length; j++ )
    console.log(`Neighbours : ${countries[i][j]}`);
}
  */

//Assignment 13
/*
const populations1 = [1425775850,425775850,125775850];
const percentages3 =[]; 

let i =0;
while(i<populations1.length){
  percent = (populations1[i]/79000000000)*100;
  percentages3.push(percent);
 i++
};
console.log(percentages3);
*/

//Last coding challenge
/*
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

/* Write your code below. Good luck! 🙂 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = []

for(let i = 0; i <bills.length; i++){
    const calcTip = function (bill) {
      return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    }
      tips.push(calcTip(bills[i]))
      totals.push(tips[i] + bills[i])
 
}
console.log(tips)
console.log(totals);

*/


