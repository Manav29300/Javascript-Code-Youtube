/*Variable Let, Var, Const
Const: It cannot be redeclared and reassigned.
       It is Block scope.
Var: It can be redeclared and reassigned.
     It is Globally scope and function scope variable.
Let: It can be redeclared but cannot be reassigned.
     It is also a Block scope variable.      
*/


const accountId = 14452
let accountEmail = "manavgaba79@gmail.com"
var accountPassword = "12345"
accountCity = "Gurugram"
let accountState;

// If i can declare the variable and cannot write the value then default javascript output will be undefined.

/*
It cannot work because this is a constant variable and above already told you const variable cannot be redeclared and reassigned.
That's why they showing error.

Not allowed
accountId = 2
*/

//Let's try remaning variables.

accountEmail = "manav@mg.com"
accountPassword = "4458"
accountCity = "Jaipur"

console.log(accountId)

//Now i am using new console method they show the output in tabular form.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var in javascript
because of issue in Block and Functional Scope.
*/