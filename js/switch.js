
const payment = "card"

switch(payment) {
    case "cash":
        console.log("You paid with cash")
        break
    case "card":
        console.log("You paid with card")
        break
    case "check":
        console.log("You paid with check")
        break
    case "paypal":
        console.log("You paid with paypal")
        break
    case "crypto":
        console.log("You paid with crypto")
        break
    case "bitcoin":
        console.log("You paid with bitcoin")
        break
    default:
        console.log("Come back later")
        break
}