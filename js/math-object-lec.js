// **** Morning Warmup - Convert a String to an Array of Strings **** //
let inputString = "Trick or Treat";
let inputArray = inputString.split(' ');

// Display each string in the array
inputArray.forEach(function(element, index) {
    console.log("[" + index + "] " + element);
});

// ********** Math Methods ********** //

// Math.random()
// var mathComputations = new Math(); // Don't do this!
let randomNum = Math.random() * 2;
console.log(randomNum);

// want between 2000 and 3000
let randSelection = Math.random()*2000 + 1000;
                    // min would be 0 + 1000 = 1000
                    // max would be 2000 + 1000 = 3000

    // get a result ->   min < chosenNum < max
    //                  2000 < chosenNum < 3000
    //    numberWithinRange = min (2000) + Math.random()*( MAX(3000) - MIN(2000) )
    //    numberWithinRange = Math.random() * (MAX - MIN)   +   MIN
let chosenNum = 2000 + Math.random()*(3000-2000);

// Pre-exercise warmup:
//        Write a method to find a random number within a range of 2 numbers (min and a max)
//          HINT: the min and max should be passed into the method as parameters


// Math.round()
//  we can't use a decimal when referring to an array index, so let's round it to the nearest integer
let index = Math.round(randomNum);
console.log("Normal rounding: " + index);


// Math.floor()
index = Math.floor(randomNum);
console.log("Rounding down: " + index);

//  once we have that integer, let's choose a random string from our halloween array
let randomWord = inputArray[index];
console.log(randomWord);

// Math.ceil()
// If we want to round UP, no matter what the decimal place is, we use Math.ceil()
// i.e. 0.00000001 -> 1
// i.e. 3.00000000001 -> 4
// i.e. 3.99999999999 -> 4

index = Math.ceil(randomNum);
console.log("Rounding up (with ceil): " + index);
randomWord = inputArray[index];
console.log(randomWord);


// create a new situation where we'll be adding a constant to our random number

// say we wanted a random number between 74 and including 186
let numBetween = Math.ceil(Math.random() * 74) + 112;
console.log("Using 74 as random base, and adding 112: " + numBetween);
// we could do the exact same thing by flipping the numbers (and get a more exact result, based on our parameters)
numBetween = Math.floor(Math.random() * 113) + 74; // .9999999999*113 = 112.999999999 = 112
console.log("Using 112 as random base, and adding 74: " + numBetween);


// Let's say we wanted a random number (decimal) between 0.0000000 and 0.80000000
let randomDecimal = Math.random()*.8;
console.log("Our random decimal is: " + randomDecimal.toFixed(2));


//   0.7 * 74 = 51.8
//    51.8 + 112 = 163.8
//   0.0000000001 * 74 = 1
//    1 + 112 = 113
// 0.9999999999999 * 74 = 74 + 112 = 186

// Math.pow()
//  This is used to raise one number to the power of another number
//  i.e. 4 ^ 2 = 16
//  i.e. 8 ^ 3 = 512
let exponentResult = Math.pow(4, 2);
console.log("4 squared (or 4^2) = " + exponentResult);
console.log("8 cubed (or 8^3) = " + Math.pow(8, 3));

// What is another way we could find 8^x power? (hint: using a loop)
let base = 8;
let exponent = 6;
let result = base;
for (let i=1; i<exponent; i++) {
    // 8, 8*8=64, 8*8*8=64*8
    result = result * base; // when i=0, result = 8 * 8(base)
                            // when i=1, result = 64 * 8(base)
                            // when i=2, result = 512 * 8(base)
}

console.log(base + " to the " + exponent + " power = " + result);


// Math.sqrt()
console.log("The square root of 16 = " + Math.sqrt(16));
console.log("The square root of 64 = " + Math.sqrt(64));


// ********** Constants ********** //

// Math.PI
// π is used to calculate circumference and area of a circle - can also be used to
//   get the diameter / radius of a circle, when you only have the circumference or area of said circle
// Circumference = 2 * π * r = π * D(diameter)°
//  alt(/option) + p = π (on Mac)
//  alt + shift + 8 = °

// let's find the circumference of a circle with a diameter of 5
let circumference = Math.PI * 5;
console.log("Circumference of a circle with diameter of 5 = " + circumference.toFixed(3));

// to move lines up and down in IntelliJ -> alt + shift + ⬆
//                                       -> alt + shift + ⬇
// Emoji menu = ctrl + CMD + space bar

// let's also find that circle's area
// Area of a Circle = π*r^2
let area = Math.PI * Math.pow(2.5, 2); // π * 2.5^2
console.log("Area of a circle with diameter of 5 = " + area.toFixed(4));

// Math.E
console.log("Euler's constant is equal to: " + Math.E);

// if we want to write scientific notation
//  4.58 x e^9
console.log("The actual number represented by 8.68 x e^17 = " +
    Math.ceil((8.68 * Math.pow(Math.E, 17)).toFixed(2))
);
//  4.58 x 10^9
