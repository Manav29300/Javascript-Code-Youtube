// for Loops

//SYNTAX


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        // console.log("5 is the Best Number");
    }
    // console.log(element);
}

// console.log(element);


for(let i=0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 20; j++){
        // console.log(`Inner loop value is ${j} and Outer loop value is ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
}

let myArr = ["flash", "batman", "superman"]
console.log(myArr.length);
for(let index=0; index < myArr.length; index++){
    const element = myArr[index];
    console.log(element);
    
}

// Break and Continue

// for(let index = 1; index <= 20; index++){
//     if(index == 5){
//         console.log(`Detected 5 number`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }


for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5 number`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}





















































