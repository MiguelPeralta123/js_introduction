
class Car {
    constructor(brand, color, status) {
        this.brand = brand,
        this.color = color,
        this.status = status
    }

    printDescription() {
        return `The car ${this.brand} color ${this.color} is now ${this.status}`
    }
}

const car = new Car("Audi", "black", "on")
console.log(car.printDescription())