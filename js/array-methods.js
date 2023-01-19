
const numbers = [1, 2, 3, 4]
console.log(numbers)

// Adds new values at the end of the array
numbers.push(5, 6)
console.log(numbers)

// Adds new values at the beginning of the array
numbers.unshift(-1, 0)
console.log(numbers)

// Deletes the last element
numbers.pop()
console.log(numbers)

// Deletes the first element
numbers.shift()
console.log(numbers)

// .splice(x, y) deletes y elements starting from index x
numbers.splice(2, 2)
console.log(numbers)


// Spread
const months = ['January', 'February', 'March', 'April']
console.log(months)

// Creating a new array with the values in months and adding a new value at the end
const newMonths = [...months, 'May']
console.log(newMonths)

// Creating a new array with the values in newMonths and adding a new value at the beginning
const newestMonths = ['December', ...newMonths]
console.log(newestMonths)