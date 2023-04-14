"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color?');

  console.log( "Great, " + userInput + "is my favorite  color too!");

let userInputLM = parseInt(prompt("How many days would you like to rent the movie for"));
  console.log("you are renting the little mermaid for " + userInputLM + " Days");

let userInputBB= parseInt(prompt("How many days would you like to rent the movie BigBrother"));
  console.log("you are renting BigBrother for " + userInputBB + " Days");

let userInputH  = parseInt(prompt("How many days would you like to rent the movie Hercules"));
  console.log("you are renting Hercules for " + userInputH + "Days");

let total = 3*(userInputLM + userInputBB + userInputH);

alert("Your total for rental movie is" + total);


let payGoogle = 400
let payAmazon = 380
let payFacebook = 350

let hoursFacebook = parseInt(prompt("How many hours did you work at Google?"));
console.log("The user entered; " + hoursFacebook);
let hoursAmazon = parseInt(prompt("How many hours did you work at Aazon?"));
console.log("The user entered; " + hoursAmazon);

let hoursGoogle= parseInt(prompt("How many hours did you work at Facebook?"));
console.log("The user entered; " + hoursGoogle);

let pay = (payGoogle * hoursGoogle) + (payFacebook * hoursFacebook) + (payAmazon * hoursAmazon);
pay
alert("your total paycheck is: $" + (payGoogle * payAmazon * payFacebook * hoursGoogle * hoursAmazon * hoursFacebook));


// A student can be enrolled in a class only if the class is not full and the class does not conflict with student schedule.

let classFull = confirm("Is the class full?");
let noScheduleConflict= confirm("Do you have a schedule conflict?");
let canEnroll = (classFull && noScheduleConflict);
canEnroll
alert("Student can attend class:" + (classFull === true && noScheduleConflict === false));

let itemsBought = Number(prompt("How  many items is the customer buying?"));
let isOfferValid  = confirm ("has Offer expired");
let premiumMember = confirm("Are you a preiumMember");
alert("customer can have discount: " + ((itemsBought>2) && isOfferValid || premiumMember));



