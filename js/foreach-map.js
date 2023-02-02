
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// Foreach
console.log("Printing with foreach")
days.forEach(day => console.log(`Today is ${day}`))

// Map
console.log("Printing with map")
days.forEach(day => console.log(`Today is ${day}`))

/*
They´re almost the same, the main difference is:
Foreach is used to print something on screen or the console
While map is used to return values and create new arrays with them
*/

// So, the next example will work only with map

console.log("Creating a new array with foreach")
const foreackArray = days.forEach(day => day)
console.log(foreackArray)

console.log("Creating a new array with map")
const mapArray = days.map(day => day)
console.log(mapArray)