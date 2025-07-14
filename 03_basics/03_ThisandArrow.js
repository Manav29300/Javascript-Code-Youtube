// Current contex ko reffer ya access krne ke liye "this." ye use krte hai.

const user = {
    username: "Manav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Manav";
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "Manav";
//     console.log(this.username);
// }


// This is Arrow Function.
const chai = () => {
    let username = "Manav";
    // console.log(this.username);
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Explicit return jb hum return keyword use krte hai.
// Implicity return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)



console.log(addTwo(3, 4));
