"use strict";

//1. Alert - welcome to my website

// alert("Welcome to my website!");


//2. User prompt for favorite color
// var userColor = prompt("What is your favorite color?");
// var alertMessage = "Great " + userColor + " is my favorite color too!";
// alert(alertMessage);




// 3.1 You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// var dailyRentalRate = Number(prompt("How much is the daily rate"));
//
// var mermaidDaysRented = Number(prompt("How long are you renting the little mermaid?"));
// var brotherBearDaysRented = Number(prompt("How long are you renting brother bear?"));
// var herculesDaysRented = Number(prompt("How long are you renting hercules?"));
//
// var totalCost = (mermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRate;
// var alertMessage = "You owe: $" + totalCost.toFixed(2);
// alert(alertMessage);


// 3.2 Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


// var googleRate = Number(prompt("What is your google rate?"));
// var amazonRate = Number(prompt("What is your amazon rate?"));
// var facebookRate = Number(prompt("What is your facebook rate?"));
//
// var googleHours = Number(prompt("How many hours did you work at google this week?"));
// var amazonHours = Number(prompt("How many hours did you work at amazon this week?"));
// var facebookHours = Number(prompt("How many hours did you work at facebook this week?"))
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)
// alert("Your total pay is: " + totalPay);







//3.3 A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

//if class is not full (true) ==> we can enroll
// var classIsNotFull = confirm("Class is not full"); //boolean

// if class schedule does not conflict ==> We can enroll - space in our schedule
// var classScheduleDoesNotConflict = confirm("Schedules do not conflict"); //boolean

// true && true ==> Student can enroll
// true && false ==> Student cannot enroll bc schedule conflict
// false && true ==> Student cannot enroll bc class if full
// false && false ==> Student cannot enroll bc class is full & there is a schedule conflict
// var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict
//
// var alertMessage = "Student enrolled: " + studentEnrolled;
// alert(alertMessage);


//3.4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//1. Offer has to be valid no matter what
//2.a If they are a premium member, number of items does not matter
//2.b If they are NOT a premium member, they must buy more than 2 items ==> have to use OR (||)

var numberOfItems = Number(prompt("How many items for checkout?")) //number
var offerIsValid = confirm("Is the offer valid?"); //boolean
var isPremiumMember = confirm("Are you a premium member?"); //boolean

// true && (true || false)
// true && (false || true)
// false && (true || true)
var discountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);
alert("Product discount: " + discountApplied);














