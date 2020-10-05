"use strict";

// WHILE & DO-WHILE LOOPS

var x = 2;
while (x <= 65536) {
	console.log(x);
	x *= 2;
}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have this many cones to sell: " + allCones);

do{
    // This expression will generate a random number between 1 and 5
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if(conesPurchased > allCones){
        var outOfStock = "Can't sell you " + conesPurchased + ". I only have " + allCones
        console.log(outOfStock);
    } else {
        allCones -= conesPurchased;
        var happyMessage = conesPurchased + " cones sold..." + allCones + " cones to go!";
        console.log(happyMessage);

    }
}while(allCones > 0);

console.log("Yay I sold all my cones!");

