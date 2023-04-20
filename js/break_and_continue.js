"use strict"
// Step 2
while (true) {
    const userInput = prompt("Please enter an odd number between 1 and 50:");

    if (userInput === null) {
        break;
    }

    const num = parseInt(userInput);

    if (isNaN(num) || num < 1 || num > 50 || num % 2 === 0) {
        alert("Invalid input. Please enter an odd number between 1 and 50.");
        continue;
    }
    console.log(`User entered: ${num}`);
    break;
}
// Step 3
let userInput = prompt("Please enter an odd number between 1 and 50:");

if (userInput !== null) {
    const num = parseInt(userInput);

    if (!isNaN(num) && num >= 1 && num <= 50 && num % 2 !== 0) {
        console.log(`Yikes! Skipping number: ${num}`);
        for (let i = 1; i <= 50; i += 2) {
            if (i === num) {
                continue;
            }
            console.log(i);
        }
    } else {
        alert("Invalid input. Please enter an odd number between 1 and 50.");
    }
}
