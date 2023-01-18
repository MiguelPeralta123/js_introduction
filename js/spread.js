
const myLaptop = {
    brand: 'ASUS',
    color: 'Black',
    price: 8000,
}

const details = {
    size: 15.5,
    processor: 'Intel Core i7'
}

// Joins two or more objects into a new one, without modifying the originals
const product = { ...myLaptop, ...details }
console.log(product)