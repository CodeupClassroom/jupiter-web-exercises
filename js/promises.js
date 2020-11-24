"use strict";

/*

Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
=
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

 */

// function wait(numMilliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, numMilliseconds)
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// function to return last push date

function extractDateOfLastPushEvent(events) {
    for (let event of events) {
        if (event.type === 'PushEvent') {
            return new Date(event.created_at).toDateString();
        }
    }
    return 'No recent pushes';
}

function lastPushDate(username) {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {headers: {'Authorization': 'token ' + gitHubToken}};
    return fetch(url, options)
        .then(res => res.json())
        .then(extractDateOfLastPushEvent)
        .catch(console.error);
}

lastPushDate("jreich5").then(console.log);

