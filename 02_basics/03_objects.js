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
Object.freeze(JsUser)
JsUser.email = "manav@microsoft.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
}

// isko string interpolation bolte hai.
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());







