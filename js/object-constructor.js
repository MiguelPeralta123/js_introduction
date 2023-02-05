
// Object literal
const product = {
    // We create the object and its properties one by one
    name: "Tablet",
    price: 500
}
console.log(product.name)

// Object constructor
function Product(name, price) {
    // This is the class, the name must be capitalized
    this.name = name,
    this.price = price
}

// Now we can create objects using the Product class
const product1 = new Product("Monitor", 300)
const product2 = new Product("Smartphone", 1000)

console.log(product1.name)
console.log(product2.name)