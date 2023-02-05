
// Object constructor
function Product(name, price) {
    this.name = name,
    this.price = price
}

// Object prototype
// Once we´ve created an object (Product), we can assign it a function that will only be available for instances of this object (product1, product2)
Product.prototype.printDescription = function() {
    return `The product ${this.name} is ${this.price} dollars`
}

// Now we can create objects using the Product class, they´ll be able to use the function "printDescription()"
const product1 = new Product("Monitor", 300)
const product2 = new Product("Smartphone", 1000)

console.log(product1.name)
console.log(product2.name)

console.log(product1.printDescription())
console.log(product2.printDescription())