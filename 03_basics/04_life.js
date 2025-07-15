// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // ye function chai h jo isko hum named IIFE bolte hai.
    console.log(`DB CONNECTED`);
})();
// chai()

( (name) => {
    console.log(`DB CONNECTED TO THE SERVER ${name}`);
} )('Manav');