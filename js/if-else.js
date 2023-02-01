
if ("1000" === 1000) {
    console.log(`With ===, "1000" and 1000 are the same`)
} else {
    console.log(`With ===, "1000" and 1000 are not the same`)
}

if ("1000" == 1000) {
    console.log(`With ==, "1000" and 1000 are the same`)
} else {
    console.log(`With ==, "1000" and 1000 are not the same`)
}

/*
These are some of the most important operators:
=== Exactly the same
== The same
!== Exactly different
!= Different
< Less than
> Greater
<= Less than or equal
>= Greater or equal
*/

// If / else if / else
const grade = 100
console.log(`Grade: ${grade}`)

if(grade > 100) {
    console.log("You liar")
} else if(grade == 100) {
    console.log("Perfect")
} else if(grade >= 80) {
    console.log("Very good")
} else if(grade >= 60) {
    console.log("Enough")
} else if(grade > 0) {
    console.log("Nice try")
} else {
    console.log("How did you do it?")
}