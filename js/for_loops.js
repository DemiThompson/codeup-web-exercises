"use strict";

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
showMultiplicationTable(7)
// Section 3
for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
// Section 4
for (let i = 1; i <= 9; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}
// Section 5
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
