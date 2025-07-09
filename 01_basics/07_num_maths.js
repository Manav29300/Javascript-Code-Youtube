const score = 400;
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2));

//(.toPrecision) => isme priority jo millti h vo decimal se pahele millti h 
// vo decimal ke baad wale ko roundoff krdeta h focus decimal se pahele wale pr he hota h.

const otherNumber = 123.89563
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);

// negative number ko positive krta hai.
console.log(Math.abs(-4));

// number round off krta hai.
console.log(Math.round(5.6987));

//agar hume control krna h ke round off first ho ya last mere hisab se then hum ye use krte h.
// ceil matlab jra sa bhi number decimal mai hua to vo upper number dega roundoff krke.
console.log(Math.ceil(4.1));

// floor matlab jitna mrji upr likha ho number decimal ke baad vo number niche wala he dega badhayega ni roundoff krke.
console.log(Math.floor(4.9));

// find the lowest value in array we can use 'Math.min()'
console.log(Math.min(4, 5, 2, 6, 3));

// find the highest value in array we can use 'Math.max()'
console.log(Math.max(4, 2, 5, 10, 2000, 0));

// 'Math.random()' isko hum use krte hai to find random values and iski value hmesha 0 se 1 ke beech he ayegi.
console.log(Math.random());

// questions mai khi baar value hume chahie hoti h jaise 1 se 6 tk then hum ye use kr skte h 
console.log((Math.random() * 10) + 1);
//isme +1 isleye lgaya h 10 se multiply krne pr values aa to jaati h but khi baar 0.012 aise bhi aa skti h value to 
// uss case mai hum +1 use krte h.


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


