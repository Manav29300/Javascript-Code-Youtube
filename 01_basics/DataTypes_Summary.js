// PRIMITIVE DATA TYPES
/* 7 types of Data Types (SSBBNNU):
 1. String
 2. Number
 3. Boolean
 4. Null
 5. Undefined 
 6. BigInt
 7. Symbol
 */


 // Javascript is Dynamically type language ya Statically type language ?
 // Ans: Javascript is Dynamically typed language.



const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);




// NON-PRIMITIVE DATA TYPES OR REFERENCE DATA TYPES
/* 3 types of Non-primitive Data Types :
 1. Arrays
 2. Object
 3. Functions
 */

// Arrays
const heros = ["shaktiman", "naagraj", "doga"]
//objects: curley brackets mai likha jata h keyvalue pairs mai likha jata hai. Data type kuch bhi ho skta hai.
let myObject = {
    name: "Manav",
    age: 23,

}

//Functions
const myfunc = function(){
    console.log("Hello World");
    
}


// Data type pta krna kissi bhi value ka kissi bhi cheez ka datatype pta karna.
// Use: typeof
console.log(typeof outsideTemp);



// ***********************************************************************************************************************************

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Manav"

let anothername = myYoutubename
anothername = "manav_2930"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
}

let userTwo = userOne

// dot(.) value se access krte h values and baki sb.


userTwo.email = "manav@google.com"

console.log(userOne.email);
console.log(userTwo.email);




