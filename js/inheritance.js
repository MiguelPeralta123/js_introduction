
// First we create the parent class
class Product {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    printInfo() {
        return `The product ${this.name} is ${this.price} dollars`
    }
}

// Then we create the subclass with "extends"
class Book extends Product {
    constructor(name, author, price) {
        // "super" references the parent class, so we´re passing it the book´s name and price
        super(name, price)
        // As the book has an extra property (author), we assign it right here
        this.author = author
    }

    // We can overwrite the method like this
    printInfo() {
        return `The book ${this.name} by ${this.author} is ${this.price} dollars`
    }

    // Or we can even overwrite the method adding something new to the original one
    /*printInfo() {
        return `${super.printInfo()} and it was written by ${this.author}`
    }*/
}

const book = new Book("The little prince", "Antoine de Saint-Exupéry", 20)
console.log(book.printInfo())