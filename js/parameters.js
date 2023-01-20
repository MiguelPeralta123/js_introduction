
// Function with parameters and default values set to 0
function sum(num1 = 0, num2 = 0) {
    console.log(num1 + num2)
}

sum(5, 3)
// Default value is 0, so this will be 6 + 0
sum(6)
// Default value is 0, so this will be 0 + 0
sum()