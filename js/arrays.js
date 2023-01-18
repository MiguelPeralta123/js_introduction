
// In JavaScript, an array can hold many data types 
// const myArray = ["Miguel", 23, true, [5, 10]]

const num = [10, 20, 30, 40, 50]
console.table(num)

// Arrays can also be created this way
const months = new Array('January', 'February', 'March', 'April', 'May')
console.table(months)

// To access an especific value, use the index starting from 0
console.log(months[2])

// Some methods are:

console.log(`Array length: ${months.length}`)

console.log('Iterating the array:')
months.forEach( function(element) {
    console.log(element)
} )