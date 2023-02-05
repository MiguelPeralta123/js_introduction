
var msg1 = "This message will always be printed"
var msg3 = "This message will only be printed if you use a try/catch to manage msg2"

// With a try/catch, the msg2 error is managed and the third message is printed
console.log(msg1)
try {
    console.log(msg2)
} catch (error) {
    console.log(error)
}
console.log(msg3)

// Try/catch must be used only in critical parts that may fail and break the execution of the code (login, fetching and api or a database, etc)