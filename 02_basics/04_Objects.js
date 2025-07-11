// singleton
// constructor

// ye ek singleton object hai.
// const tinderUser = new Object()

// ye ek non singleton object hai.
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manav",
            lastname: "Gaba"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// spread operator: 90% yhi syntax hoga use.
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// ".entries " ye ek key value ko array mai bna deta hai.
console.log(Object.entries(tinderUser));

// objects ke andr purra loop through kr rhe h khi baar value exist ni krti to isse crash hone ke chances hote hai 
// to iss method ke through simply hum usse puch skte h ke ye value exist krti h ya nhi.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));







