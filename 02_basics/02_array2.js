const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//one more method to merger two arrays it's ".spread" operator.
const all_new = [...marvel_heros, ...dc_heros]
console.log(all_new);


// agar array ke andar array ke andar array h like 1 array ke andar nested 2-3 arrays h 
// to sbko ek he array mai laane ke liye "flat" use hota hai.

const another_new_array = [1, 2, 3, 4, [4, 5, 6], [7, 8, 9],[10, 11]]

const real_array = another_new_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Manav"));
// Ek string ko array mai convert krne ke liye from use hota hai. jo bhi values denge hum usko array mai convert krdega ye '.from'
console.log((Array.from("Manav")));

// interesting case because isme ye empty array return krega because usko btana pdega hume ke konsi value convert krni h.
// Agar vo nhi kr paya convert then empty array return krega.
console.log(Array.from({name: "Manav"}));

// 'Array.of' returns a new array from set of elements. ye new array return krta hai jo bhi aapne dia h objects 
// strings kuch bhi unsbko ko ek array mai convert krke return krta hai.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

