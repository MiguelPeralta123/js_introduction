// To understand how async/await works, go to js/async-await.js.

/*
If we have two or more async/await functions, there´s a way to start executing them at the same time.
For example, if we have two promises and the first takes 5 seconds, while the second one takes 3 seconds, we´ll have to wait 8 seconds to have the result of both.
If we execute them at the same time, we´ll only have to wait 5 seconds (or the time that takes the longest one)
*/

const downloadUsers = () => {
  return new Promise((resolve) => {
    console.log("Downloading users, wait a moment...");

    setTimeout(() => {
      resolve("Downloaded users");
    }, 5000);
  });
};

const downloadProducts = () => {
  return new Promise((resolve) => {
    console.log("Downloading products, wait a moment...");

    setTimeout(() => {
      resolve("Downloaded products");
    }, 3000);
  });
};

const app = async () => {
  try {
    /* This way, the execution would take 8 seconds
    const result = await downloadUsers()
    const result2 = await downloadProducts()
    */

    // This way, the execution will only take 5 seconds. Promise.all takes an array of promises and starts executing them all at the same time
    const result = await Promise.all([downloadUsers(), downloadProducts()])
    console.log(result[0]);
    console.log(result[1]);
  } catch (error) {
    console.log(error);
  }
};

app();
