function saymyName(){
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("v");    
}

// saymyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter Username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Manav"));
console.log(loginUserMessage());

