"use strict";

/*

Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
=
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

 */

function wait(numMilliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, numMilliseconds)
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));