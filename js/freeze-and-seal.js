// Makes the program run in strict mode, throwing errors instead of ignore them
// 'use strict'

const myLaptop = {
    brand: 'ASUS',
    color: 'Black',
    price: 8000,
}

// Freezes the object, so we can´t add, delete or modify its properties
Object.freeze(myLaptop)

// With this method, we can see if the object is frozen
console.log(Object.isFrozen(myLaptop))

// It´s almost like freeze, but with seal we can still modify the existing properties
Object.seal(myLaptop)

// With this method, we can see if the object is sealed
console.log(Object.isSealed(myLaptop))

myLaptop.image = 'image.jpg'

console.log(myLaptop)