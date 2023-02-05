
const button = document.querySelector("#notification")
button.addEventListener("click", () => {
    Notification.requestPermission()
    .then(result => {
        if (result === "granted") {
            new Notification("This is a notification", {
                icon: "img/js_logo.png",
                body: "Learning how to create and send notifications with JavaScript"
            })
        }
    })
})