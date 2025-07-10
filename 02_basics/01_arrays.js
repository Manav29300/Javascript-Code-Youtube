// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);

// Arrays Methods

// push ka meaning ka jo bhi push mai number likhenge vo humare array mai last mai add hojayega and return krdega
// push values ko add krdeta hai humare array ke andar.
myArr.push(6)
myArr.push(7)
console.log(myArr);

// pop ka meaning hai hai humare array mai jo last value hai vo remove krdega.
myArr.pop();
console.log(myArr);

// unshift meaning ye add krdega jo bhi value denge usse array ke starting mai jisse baki purre array ke position change hongi.
// shift bhi hota h usme hum paranthesis mai kuch ni daalte to koi value ni aati array as it is return hojata hai.
myArr.unshift(9)
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(11));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);


// SLICE AND SPLICE

//SLICE:

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);








