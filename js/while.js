"use strict";

let num = 2;

while (num <= 65536) {
    console.log(num);
    num *= 2;
}
// Do while loop
do {

    let conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= userInput) {

        userInput -= conesToSell;

        console.log(conesToSell + " cones sold...");
    } else {
        console.log("Cannot sell you " + conesToSell + " cones, I only have " + userInput + "...");
    }
} while (userInput > 0);

console.log("Yay! I sold all the cones!");

