const myLaptop = {
    brand: 'ASUS',
    color: 'Black',
    price: 8000,
}

// Old way
const brand = myLaptop.brand
console.log(brand)

// Destructuring
const {color, price} = myLaptop
console.log(color)
console.log(price)

// Var names and object´s properties names must be the same (const color == myLaptop.color)