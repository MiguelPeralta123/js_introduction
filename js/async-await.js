
// This function returns a promise, which takes a few seconds
const downloadUsers = () => {
    return new Promise(resolve => {
        console.log("Downloading users, wait a moment...")

        // setTimeout executes after a specific amount of time, this case, 3 seconds
        setTimeout(() => {
            resolve("Downloaded users")
        }, 3000);
    })
}

// app is an asynchronous function, and calls downloadUsers, which takes 3 seconds before return a response
const app = async () => {
    try {
        const result = await downloadUsers()
        // This console won´t execute till downloadUsers finishes returns a result
        console.log(`This line will block`)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

app()

// This line is totally apart of app, so it will be executed though downloadUsers hadn´t returned a response yet
console.log(`This line won´t block`)

// To see how to work with two or more promises at the same time, go to js/async-async-2.js