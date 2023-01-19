
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

const cart = [
    {name: 'Monitor 20 inches', price: 500},
    {name: 'Smart TV 50 inches', price: 700},
    {name: 'Tablet', price: 300},
    {name: 'Headphones', price: 200},
    {name: 'Keyboard', price: 50},
    {name: 'Phone', price: 500},
    {name: 'Speakers', price: 300},
    {name: 'Laptop', price: 800},
]

// FOREACH
// Foreach method takes a function as an argument. The argument in the function is the current value depending on the iteration
days.forEach( function(day) {
    console.log(day)
} )

// INCLUDES
// If the array contains this value, it will return true
console.log(days.includes('Tuesday'))

// Otherwise, it will return false
console.log(days.includes('Friday'))

// SOME
// To map an array of objects, we use the method some
const result = cart.some( function(product) {
    return product.name === "Phone"
} )
console.log(result)

// REDUCE
// Returns the result of a specific operation, in this case, it´s a sum of prices (total is the returned value, product is the iterator and the 0 is the initial value for total)
const sum = cart.reduce( function(total, product) {
    return total + product.price
}, 0 )
console.log(sum)

// FILTER
// Let us filter the values that meet a spesific condition
const res = cart.filter( function(product) {
    return product.price <= 300
} )
console.log(res)