"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// const filteredUsers = users.filter((user) => {
//     // if (user.languages.length >= 3) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return user.languages.length >= 3;
// });

// const filteredUsers = users.filter(user => user.languages.length >= 3);
//
// console.log(filteredUsers);


// Use .map to create an array of strings where each element is a user's email address

// const emails = users.map(user => {
//     return user.email;
// });

// const emails = users.map(({ email }) => email);

// console.log(emails);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// const totalYears = users.reduce((accumYears, {yearsOfExperience}) => {
//     return accumYears + yearsOfExperience;
// }, 0);
//
// console.log(totalYears);

// Use .reduce to get the longest email from the list of users.

// const longestEmail = users.reduce((accum, curr) => {
//     return (curr.email.length > accum.length) ? curr.email : accum;
// }, '');
//
// console.log(longestEmail);


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//
// const userString = users.reduce((accum, { name }) => {
//     return `${accum} ${name}, `;
// }, 'instructors are: ').slice(0, -2) + ".";

// const userString = users.reduce((accum, { name }) => `${accum} ${name}, `, 'instructors are: ').slice(0, -2) + ".";
//
// console.log(userString);


// BONUS

// const allLanguages = users.reduce((accum, curr) => {
//     return accum.concat(curr.languages);
// }, []);
//
// const uniqueLanguages = new Set(allLanguages);
// console.log(uniqueLanguages);
// const arrUnique = Array.from(uniqueLanguages);
// console.log(arrUnique);



