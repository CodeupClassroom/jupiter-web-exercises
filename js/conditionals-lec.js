"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// var isAdmin = true;
//
// if(isAdmin){
// 	//show an admin navbar
// }







//TODO Together: Send a 20% off coupon if its users birthday
//1. check user table in database for birthdays
//2. some sort of function to get today's birthdays

// if(isBirthday){
// 	//send a coupon
// }








//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if(isRainy){
// 	alert("its raining!");
// }





//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 25;
// var currentBalance = 50;

// 100 > 50 => true


// if(itemCost > currentBalance){
// 	alert("Sorry you don't have enough money!");
// } else {
// 	alert("Yay, you can buy the item!");
// }


// purchase(50, 100);
//
// function purchase(itemCost, currentBalance){
// 	if(itemCost > currentBalance){
// 		alert("Sorry you don't have enough money!");
// 	} else {
// 		alert("Yay, you can buy the item!");
// 	}
// }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 0;
// if(numberOfLives === 0){
// 	alert("sorry, game over!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "sunny";
// if(weather === "snowing"){
// 	alert("it's snowing!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 5;
// if(numberInput > 10){
// 	alert("true. number is greater than 10.");
// }






//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
// //
// // if(isAdmin){
// // 	//show the admin navbar
// // 	console.log("is admin");
// // } else {
// // 	//show regular navbar
// // 	console.log("regular user");
// // }









//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = false;
//
// if(isRainy){
// 	alert("it's raining!");
// } else {
// 	alert("have a nice day!");
// }




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 7;
// if(numberOfLives === 0){
// 	alert("Sorry game over!");
// } else {
// 	alert("Next Level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
// if(weather === "snowing"){
// 	alert("it's snowing");
// } else {
// 	alert("check back later for more details");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 6;
// if(numberInput > 10){
// 	alert("true, number greater than 10");
// } else {
// 	alert("number is less than 10!");
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIfGameIsOver(numberOfLives){
	if(numberOfLives === 0){
		return "Sorry game over!";
	} else {
		return "Next Level";
	}
}

// console.log(checkIfGameIsOver(7));




//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE
// var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?") //boolean
//
// console.log("The confirm value: " + weShouldDeleteStuff);
// // ok selection ==> true, cancel selection ==> false
//
// if(weShouldDeleteStuff){
// 	// delete everything
// 	// double check!
// 	alert("we are deleting everything....");
// } else {
// 	alert("operation cancelled");
// }







//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
//
// var userAgeConfirm = confirm("Are you 13 years of age or older?");
// if(userAgeConfirm){
// 	alert("you may proceed");
// } else {
// 	alert("sorry, you are not able to proceed");
// }
//




// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "sunny";
//
// if(weather === "snowing"){
// 	alert("its snowing!");
// } else if (weather === "raining"){
// 	alert("its raining!");
// } else {
// 	alert("Have a nice day!");
// }



//TODO Together: refactor the above statement as a function

// function checkWeather(input){
// 	var weather = input.toLowerCase();
// 	if(weather === "snowing"){
// 		return "its snowing";
// 	} else if (weather === "raining"){
// 		return "its raining";
// 	} else {
// 		return "have a nice day";
// 	}
// }
//
// console.log(checkWeather("windy")); // would expect have a nice day
// console.log(checkWeather("sunny")); // have a nice day
// console.log(checkWeather("SNOWING")); // its snowing




// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else if (pizzaPreference === "pepperoni"){
// 	alert ("great!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function checkIntersectionLight(lightColor){
	if(lightColor === "red"){
		return "stop";
	} else if (lightColor === "yellow"){
		return "slow down";
	} else if (lightColor === "green"){
		//green
		return "proceed";
	} else {
		// unknown
		return "proceed with caution.";
	}
}

// console.log(checkIntersectionLight("red"));; // stop
// console.log(checkIntersectionLight("blinking")); // caution
// console.log(checkIntersectionLight("green")); // proceed



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// var userAge = 16;
// var hasPermit = true;
// // 16 && hasPermit === true ==> eligible for license
//
// if(userAge < 15){
// 	// 14 or younger
// 	alert("sorry, not eligible yet!");
// } else {
// 	// 15 or older & you are eligible
// 	//nested statement
// 	if (userAge === 15) {
// 		//user is exactly 15 years old
// 		alert("You are eligible for a permit!");
// 	} else if (userAge >= 16 && hasPermit === true){
// 		// user is greater than or equal to 16 AND they have a permit
// 		alert("You can get a license! Yay!");
// 	} else if (userAge >= 16 && hasPermit === false){
// 		// user is greater than or equal to 16, but they have never had a permit :(
// 		alert("You need to have a permit 1st!");
// 	} else {
// 		alert("Please call support!");
// 	}
// }










// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);



// var success = false;
// var message = (success) ? "Operation was successful" : "Oops, something went wrong.";
// console.log(message);








//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

var pizzaPreference = prompt("What kind of pizza do you like?");


switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
	case "ham":
		alert("ham is great");
		break;
	case "mushroom":
		alert("i love mushrooms!");
		break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}







//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

