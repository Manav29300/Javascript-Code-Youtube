const name = "Manav"
const repoCount = 50

// This syntax is outdated.
console.log(name + repoCount + " Value");

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

const newString = gameName.substring(0, 4);
console.log(newString);

// .slice: agar hum isme negative values dete h to ye reverse se start hota hai.
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// new String => (.trim) ye jo unknowlingly faltu spaces hoti h usko remove krta hai.
const newStringone = "         Manav        "
console.log(newStringone);
console.log(newStringone.trim());

//New String=> (.replace) ye replace krta h kissi bhi word ko url ya sentence mai se.
const url = "https://manav.com//manav%20gaba";
console.log(url.replace('%20', '-'));

console.log(url.includes('welcome'));

console.log(gameName.split("").join("\n"));

let name1 = "ManavGaba";
for(let i=0; i<name1.length; i++){
    console.log(name1[i]);
}











