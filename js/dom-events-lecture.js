"use strict";

// https://developer.mozilla.org/en-US/docs/Web/Events

// ==========================  Simple Example

// create variable to hold DOM reference to button element
//     var testBtn = document.getElementById("test-btn");

// add event listener using anonymous function
//     testBtn.addEventListener("click", function() {
//        console.log("test");
//     });

// add event listener from a previously defined function
//     function logTest() {
//         console.log("Test");
//     }

// remove event listener
//     testBtn.removeEventListener("click", logTest);


// ==========================  Register Additional Events

// when a cursor hovers over a paragraph, change the text color, font-family, and make larger

// target the node
// add event listener for mouseover event to target
// in listener change styling for paragraph
// var paragraph = document.getElementsByTagName('p')[0];
// paragraph.addEventListener('mouseover', function() {
//     paragraph.style.color = "red";
//     paragraph.style.fontFamily = "arial";
//     paragraph.style.fontSize = "2em";
// });
//
//
// // when double clicking the restore text button, make the paragraph font size 1em
// var shrinkBtn = document.getElementById("shrink-btn");
// shrinkBtn.addEventListener("dblclick", function() {
//    paragraph.style.fontSize = '1em';
//
// });
//



// ==========================  Event Object

// document.addEventListener("click", function(e) {
//    console.log(e);
// });
//
//
// document.addEventListener("click", function(e) {
//
//    var red = e.screenX % 256;
//    var green = e.screenY % 256;
//    var blue = "ff";
//
//    console.log(e.screenX);
//    console.log(e.screenY);
//
//    red = red.toString(16);
//    green = green.toString(16);
//    blue = blue.toString(16);
//    document.body.style['background-color'] = "#" + red + green + blue;
//
// });

// ==========================  Keyboard Events and Prevent Default

// document.addEventListener("keypress", function(e) {
//    console.log(e.code);
//    if (e.code === "Space") {
//       e.preventDefault();
//    }
// });


// ==========================  This Keyword

// *** see additional example