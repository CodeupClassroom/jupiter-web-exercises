"use strict";

// FOR LOOPS

function showMultiplicationTable(num){
    for(var i = 1; i <= 10; i++){
        var product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}

// showMultiplicationTable(7);


// runs 10 times
// random number must be between 20 - 200
// say whether number is odd or even

for(var i = 0; i < 10; i++){
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    }else{
        console.log(randomNumber + " is odd");
    }
}

// Solution 1 for pyramid

for(var outer = 1; outer <= 9; outer++){
    var output = '';

    for(var inner = 1; inner <= outer; inner++ ){
        output += outer;
    }
    console.log(output);
}

// Solution 2 for pyramid

for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

for(var i = 100; i >= 5; i-=5){
    console.log(i);
}

