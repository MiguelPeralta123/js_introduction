
// Function declararation
function sum() {
    console.log(10 + 10)
}
sum()

// Function expression
const sub = function() {
    console.log(10 - 5)
}
sub();

// IIFE
(function() {
    console.log('This is a function that doesnt need to be called, it calls itself')
})()

// These functions are used to protect variables, for example, I can easily access a variable stored in another js file. I´ll read num1 in function-example.js
console.log(myName)

// If I declare the variable inside an IIFE function, it won´t be accessible from here
console.log(myLastName)