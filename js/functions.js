
// Function declararation
// We can call the function before create it
sum()
function sum() {
    console.log(10 + 10)
}

// Function expression
// The function must be created before call it
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

// METHODS AND FUNCTIONS
// Methods are part of an object, for example console.log()
// Functions don´t need an object, like parseInt(num)