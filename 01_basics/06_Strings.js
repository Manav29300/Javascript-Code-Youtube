const name = "Manav"
const repoCount = 50

// This syntax is outdated.
// console.log(name + repoCount + " Value");

// Updated Syntax
// Backticks use krnege iska fayda hai yha pr aata h String Interpolation. Isse hum placeholders bnate hai unke andr jo bhi
// variable hai hum vha pr directly inject kr skte hai.
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('ManavGaba')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));



