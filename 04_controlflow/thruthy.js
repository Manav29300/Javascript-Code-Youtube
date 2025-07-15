// thruthy or false value concept
// isme agar hum string variable lenge to else condition chlegi or false dega output and if we take array value then if condition will work and give true.
// Thruthy Values


const userEmail = []

if(userEmail){
    console.log(("Got user email"));
} else {
    console.log("Don't have user email");
}

// Now Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN(Not a Number)
// inke alawa jitne bhi h jo bhi hai saare ke saare thruthy values hai.

// Now Thruthy values and kon kon values hume surprise kr skti hai.
// thruthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty"); 
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20




console.log(val1);

// Terniary Operator

// condition ? true : false

const GreenTeaPrice = 100
GreenTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




