// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);

// Arrays Methods

// push ka meaning ka jo bhi push mai number likhenge vo humare array mai last mai add hojayega and return krdega
myArr.push(6)
myArr.push(7)
console.log(myArr);

// pop ka meaning hai hai humare array mai jo last element hai vo remove krdega.
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







