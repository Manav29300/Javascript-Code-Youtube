// Singleton

// Object Literals
// ye object ko declare karne ka tarika hai.
// dono trike se object he banta hai diff is singleton only.
Object.create
// issi ko bola jata hai constructor method ke through declare karna object ko or issi ke andr singleton banta hai.

// Now object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Manav",
    "full name": "Manav Gaba",
    [mySym]: "myKey1",
    age: 23,
    location: "Gurugram",
    email: "manavgaba59@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
myArray = ["M", "a"]
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "manavgaba@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "manav@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

// isko bolte hai string interpolation.
JsUser.greetingTwo = function(){
    // isme comma lga kr "${}" ye jo likha hai isme koi bhi variabe likh skte hai hum. 
    // Jab bhi hume same object ko reference krna h to hum ${} iske andar "this." likh skte hai.
    
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());









