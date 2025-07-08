let score = false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => it will easily convert in 33
// "33abc" => it cannot convert and give output 'NaN'
// true => it will convert in 1 and false => it will convert in 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// When i'll write 1 => it will convert true; and 0 => it will convert false;
// When i'll use empty string then value will be false [ "" => false ]
// when i'll add some value in string output will be true [ "Manav" => true ]

let number = 33

let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);
