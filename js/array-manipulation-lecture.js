"use strict";
var pies = [
    "apple",
    "cherry",
    "key lime",
    "huckleberry",
    "rhubarb"
];

// TODO: given the above array how do we log each element to the console?
// manually
// console.log(pies[0]);
// console.log(pies[1]);
// console.log(pies[2]);
// console.log(pies[3]);
// console.log(pies[4]);

// // for loop
// for (var i = 0; i < pies.length; i += 1) {
//     console.log(pies[i]);
// }
//
// // forEach
// pies.forEach(function(pie) {
//     console.log(pie);
// });



/**
 * ===== Concepts to cover:
 *
 * Methods to add/remove elements...
 * .push()
 * .pop()
 * .shift()
 * .unshift()
 *
 * Methods to search an array...
 * .indexOf()
 * .lastIndexOf()
 *
 * Method to return a copied segment of an array...
 * .slice()
 *
 * Method to reverse the order of the array...
 * .reverse()
 *
 *
 * Method to sort the array...
 * .sort()
 *
 * Methods to convert a string to an array and vice versa...
 * .split()
 * .join()
 *
 */

// TODO: throughout the lecture this morning, note which of the above methods mutate (change) an array and which ones do not.

// ============================= Adding and Removing Elements

/*

    // The following array methods change the original array value!

    someArray.shift()   = removes first element
    someArray.unshift() = adds new first element
    someArray.pop()     = removes last element
    someArray.push()    = adds new last element

 */

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// add element to beginning

    // pies.unshift('blueberry'); // returns the new total number of items in the array

// add element to end

    // pies.push('chocolate'); // again returns the new total number of items in the array

// remove element from the front of an array

    // pies.shift(); // return value???
    // console.log(pies);


// remove an element from the end of an array

    // pies.pop();

// TODO: remove the last element and add to beginning

    // var poppedElement = pies.pop();
    // pies.unshift(poppedElement);
    // console.log(pies);
    //


// ============================= Searching

var pies = [
    "apple",
    "cherry",
    "key lime",
    "huckleberry",
    "key lime",
    "rhubarb",
    "key lime"
];

// find index of first matching result in array

    // console.log(pies.indexOf('key lime'));

// returns -1 if no matching result

    // console.log(pies.indexOf('chocolate'));


// find the index of the last occurrence of a matching element in the array

    // console.log(pies.lastIndexOf("key lime"));



// ============================= Slicing

// RETURNS A COPIED SEGMENT OF THE ORIGINAL

/* SYNTAX

   someArray.slice(startingIndex, startingOfIndexNotIncluded);

   // one argument only will return a copy from the starting index to the end of the array

 */

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];


// TODO GROUP: find various combinations of output

// TODO EXERCISE: create a function that takes in an array of pies baked
//  and return the 3 most recently baked pies (the three at the end)

// function lastThree(arr) {
//     return arr.slice(arr.length - 3);
// }
//
//
// console.log(lastThree(pies),
//     ["huckleberry", "rhubarb", "key lime"]);
//



// ============================= Reversing

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];
//
// pies.reverse();
// console.log(pies);


// ============================= Sorting

var pies = [
    "cherry",
    "apple",
    "huckleberry",
    "rhubarb",
    "key lime"
];

// sort an array in alphabetical order

    // console.log(pies);
    // pies.sort(); // returns a copy as well as mutate the original
    // console.log(pies);

// sort in chronological order

    // var numbers = [1, 2, 11, 4, -1];
    // numbers.sort();
    // console.log(numbers); // wat?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// ============================= Split / Join

// splitting string into and array

// var names = "Bob Sally Mary";
// var namesArr = names.split("_");
// console.log(namesArr);

// var namesArr = ['Bob', 'Sally', 'Mary'];
// var namesString = namesArr.join(" ");
// console.log(namesString);

// console.log(namesString);

// splitting on an empty string

    // var everyCharacter = bondsString.split("");

// joining array into a string

    // var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
    // var bondsString = bondsArray.join("_");


// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers without any symbols. Log the output of the returned array.

/* EXAMPLE...

    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    cleanPhoneNumbers(phoneNumbers);

    the above code should output the following...

       2105552020
       2305552020
       5125553030

*/

var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

function cleanPhoneNumbers(phoneNums) {
    var output = [];
    // split input on newline character into an array of numbers
    var phoneNumsArr = phoneNums.split('\n');
    // create an output array of numbers with the dash removed
    phoneNumsArr.forEach(function(phoneNum) {
        var phoneNumArr = phoneNum.split('-');
        // combine into a single string without dashes
        var phoneNumNoDashes = phoneNumArr.join('');
        output.push(phoneNumNoDashes);
    });
    // return output
    return output;
}

var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);

for (var i = 0; i < cleanNumsArr.length; i += 1) {
    console.log(cleanNumsArr[i]);
}













// ============================= (EXTRA INFO) Splicing Elements

/*

    someArray.splice(param1, param2, param3...);

    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array

 */

//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//
//
// // adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//
//
// // replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);

