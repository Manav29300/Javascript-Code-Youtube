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

function loginUserMessage(username = "sam"){
    // if (username === undefined){
    //     console.log("Please enter Username");
    // }
    // return `${username} just logged in`

    if (!username){
        console.log("Please enter Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Manav"));
console.log(loginUserMessage("Manav"));


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 2000))


const user = {
    username: "Manav",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 999
})

// iske andr arrays bhi pass kr skte hai hum.
const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

