"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * function  sayHello(name) {
 *   return "Hello, " + name + "!";
 * }
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return `Hello, ${name}!`;
}
console.log(sayHello("Hello, codeup!"));



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
function sayHello(name) {
    return `Hello, ${name}!`;
}

const myName = "helloMessage";
const helloMessage = sayHello(myName);

console.log(helloMessage); //
let helloMessage : = sayHello()
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
function sayHello(name) {
    return `Hello, ${name}!`;
}

const myName = "sayHello";
const helloMessage = sayHello(myName);

console.log(helloMessage);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(nun) {
    if (nun === 2) {
        return(false);
    } else  {
        return(true);
    }
}
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 */
function calculateTip(tipPercentage, totalBill) {
    let tipAmount = totalBill * (tipPercentage / 100);
    return tipAmount;
}
let tipPercentage = 15;
let totalBill = 50;
let tipAmount = calculateTip(tipPercentage, totalBill);

console.log(tipAmount);


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
function calculateTip(tipPercentage, totalBill) {
    let tipAmount = totalBill * (tipPercentage / 100);
    return tipAmount;
}

let totalBill = parseFloat(prompt("What was the total bill amount?"));
let tipPercentage = parseFloat(prompt("What percentage would you like to tip?"));

let tipAmount = calculateTip(tipPercentage, totalBill);
let formattedTipAmount = tipAmount.toFixed(2);

alert(`You should tip $${formattedTipAmount}.`);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.

 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(originalPrice, discountPrecent) {
    return(originalPrice - (originalPrice))
    let originalPrice : = Prompt("What is the cost of the item?");
    let discountPrecent : = Prompt("What is the Discount?");
    alert("Your total is $" + applyDiscount(originalprice, discountPrecent))
}
