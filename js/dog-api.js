/**
 * RESTful APIs allow us to CRUD resources/entities on a server using the REST architectural style.
 * Most APIs are structured in a RESTful way. Later in the course, we will be building our own
 * using Java. For now we can make requests to a mock server. Typically, we can use HTTP methods
 * and JSON to send and receive data when CRUDing entities.
 *
 * More info: https://restfulapi.net/
 */

"use strict";

const apiURL = 'https://youthful-wool-check.glitch.me/dogs';

/**
 * Example function to fetch all records
 * @returns {Promise<void>}
 */
const getDogs = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error);

/**
 * Example function to fetch single dog object by id
 * @param id - the primary key of the api data
 * @returns {Promise<any | void>}
 */
const getDog = id => fetch(`${apiURL}/${id}`)
    .then(res => res.json())
    .catch(console.error);

/**
 * Example function to edit a given dog object
 * @param dog - a dog object with a valid id
 * @returns {Promise<any | void>}
 */
const editDog = dog => fetch(`${apiURL}/${dog.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dog)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: edited ${JSON.stringify(data)}`);
    })
    .catch(console.error);

/**
 * Example function to delete a dog object by it's id
 * @param id - the primary key of the api data
 * @returns {Promise<any | void>}
 */
const deleteDog = id => fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        console.log(`Success: deleted dog with id of ${id}`);
    })
    .catch(console.error);

/**
 * Example function to create a new dog object
 * @param dog
 * @returns {Promise<any | void>}
 */
const addDog = (dog) => fetch(`${apiURL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dog)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
        return data.id; // to access the primary key of the newly created entity
    })
    .catch(console.error);