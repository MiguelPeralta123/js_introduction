
const product = {
    nombre: 'Laptop',
    price: 20000,
    available: true
}

console.log(product)
console.log(product.nombre)

product.image = 'image.jpg'
delete product.available

console.log(product)