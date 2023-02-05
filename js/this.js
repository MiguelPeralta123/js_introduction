
const reservation = {
    name: "Miguel",
    lastname: "Peralta",
    total: 500,
    paid: false,
    info: function() {
        // "this" references the current object
        console.log(`${this.name} has made a reservation for ${this.total} dollars`)
    }
}

// If we want "this" keyword to work with arrow functions, we need to create the variables in the window object
window.name = "Jesús Miguel"
window.total = "600"

const reservation2 = {
    name: "Jesús",
    lastname: "Olivarría",
    total: 500,
    paid: false,
    info: () => {
        // "this" doesn´t work with arrow functions because in these cases, "this" doesn´t references the current object, but the window
        console.log(`${this.name} has made a reservation for ${this.total} dollars`)
    }
}

// Prints the reservation object properties
reservation.info()

// Prints the window object properties
reservation2.info()