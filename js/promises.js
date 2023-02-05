const authenticatedUser = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve();
  } else {
    reject();
  }
});

authenticatedUser
.then(response => {
    console.log("User is authenticated")
})
.catch(error => {
    console.log("User could not authenticate")
})

/*
The promise may return a resolve (when everything goes ok) or a reject (when something goes wrong) and depending on that return, then or catch will be executed.
For this example, if "auth" is true, the promise returns a resolve, so "then" will execute.
In case auth is false, the return would be reject, so "catch" would be executed.

A promise can return three responses:
Pending: it has not been fulfilled, but it has not been rejected either
Fulfilled: everything was ok, "then" will execute
Rejected: something went wrong, "catch" will execute
*/