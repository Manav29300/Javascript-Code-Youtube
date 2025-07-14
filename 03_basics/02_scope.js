// let a = 10;
// const b = 20;
// var c = 30;


// Isko Bolte h Scope in every programing language.
// {} ye jb kissi function ke sath ya fir kissi if else ke sath aata hai so isse scope bolte hai.
// {} ye jb objects ke sath aata h to isse object declaration bolte hai.

let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("INNER: ", a);
}

for(let i = 0; i < Array.length; i++) {
    const element = array[i]; 
}

console.log(a);
// console.log(b);
// console.log(c);


