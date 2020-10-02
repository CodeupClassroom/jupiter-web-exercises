"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



function analyzeColor(color){
	if(color === "blue"){
		return "Blue is the color of the sky";
	} else if ( color === "red"){
		return "strawberries are red";
	} else if (color === "cyan"){
		return "I don't know anything about cyan";
	} else {
		return "I don't have a message for that color";
	}
}

console.log(analyzeColor('blue')); // returns "blue is the color of the sky"
console.log(analyzeColor('red')); // returns "Strawberries are red"
console.log(analyzeColor('cyan')); // returns "I don't know anything about cyan"




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("random color is: " + randomColor);
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function analyzeColorSwitch(color){

	switch (color) {
		case "blue":
			return "blue is the color of the sky";
		case "red":
			return "strawberries are red";
		case "cyan":
			return "I dont know anything about cyan";
		default:
			return "You're just making up colors now!!!!";
	}

}


function analyzeColorSwitch(color){
	var colorMessage;

	switch (color) {
		case "blue":
			colorMessage =  "blue is the color of the sky";
			break;
		case "red":
			colorMessage = "strawberries are red";
			break;
		case "cyan":
			colorMessage = "I dont know anything about cyan";
			break;
		default:
			colorMessage = "You're just making up colors now!!!!";
			break;
	}

	return colorMessage;
}

console.log(analyzeColorSwitch(randomColor));




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


var userColor = prompt("Please enter a color");
alert(analyzeColorSwitch(userColor));




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount){
	var discountRate = 0;

	switch(luckyNumber){
		case 0:
			discountRate = 0;
			break;
		case 1:
			discountRate = .1;
			break;
		case 2:
			discountRate = .25;
			break;
		case 3:
			discountRate = .35;
			break;
		case 4:
			discountRate = .50;
			break;
		case 5:
			discountRate = 1;
			break;
	}

	return totalAmount - (totalAmount * discountRate);
}

console.log(calculateTotal(0, 100)); // returns 100
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100)); // returns 0




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);

var totalBillPrompt = parseFloat(prompt("What is your total bill?"));
var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);

alert("Your lucky number is: " + luckyNumber + " Your total bill was: " + totalBillPrompt + " Your final discounted bill is " + finalAmount);

// var alertMessage = "Your lucky number is " + luckyNumber;
// alertMessage += " Your total bill was: $" + totalBillPrompt.toFixed(2);
// alertMessage += ". Your final discounted bill is: $" + finalAmount.toFixed(2);
//
// alert(alertMessage);




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//1. I need a confirm to ask the user if they want to enter a number (if they dont want to enter a number game over)
//2. if they click confirm (we need a conditional) ask the user for a number (prompt)
//3. We need to check if this is a number or not a number
//4. If it is a number: even/odd, number +100, neg/pos
//5. if its not a number tell them its not a number



var userConfirm = confirm("Would you like to enter a number?");

if(userConfirm){
	//true path, they want to enter a number

	var userNumInput = prompt("Please enter a number.");

	console.log("user entered the following; " + userNumInput);

	//checking to see if the user input is a number; isNaN == true if the value is not a number (like a string) so !isNaN ==> tell us if value is a number
	var isNumber = !isNaN(userNumInput);

	if(isNumber){
		//true/happy path ==> user did input a number

		//parse the input after confirmed that it is a number so we are working with correct data type
		var userNumber = parseFloat(userNumInput);

		//check to see if the number is even
		var isEven = userNumber % 2 === 0;
		console.log("The user's number is even: " + isEven);

		//User ternary statement to determine the message, if even, use even message, if odd, use odd message
		var evenMessage = (isEven) ? "Your number is even!" : "Your number is odd!";
		alert(evenMessage);

		//add and alert 100 to user number
		alert(userNumber + 100);


		//Use ternary statement to determine positive or negative
		var posNegMessage = (userNumber >= 0) ? "Your number is positive" : "Your number is negative";
		alert( posNegMessage);

	} else {
		// sad path ==> not a number
		alert("Hey, that's not a number!");
	}


}















