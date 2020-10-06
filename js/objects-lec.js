"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */

var rubberDuck = {
  color: "yellow",
  role: "emotional support",
  name: "cody"
};

console.log(rubberDuck);

/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */

var myPhone = new Object();
// var myPhone = {};

var myPhone = {
  color: "gold",
  model: "iPhone XS",
  storage: "512GB",
  ring: function(){
    console.log("Ring ring!")
  },
  picture: function(){
    console.log("Take a picture!");
  }
};
//
// console.log(myPhone.color);
// console.log(myPhone.model);
// console.log(myPhone.storage);
// myPhone.ring();
// myPhone.picture();


/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */

var myMac = {};


/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

// Use dot notation to assign new properties or access existing values
myPhone.color = "gold";
myPhone.model = "iPhone XS";
myPhone.storage = "512 GB";
myPhone.ring = function(){
  console.log("Ring ring!");
};

console.log(myPhone);
myPhone.ring();

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.model = "MacBook Pro";
myMac.size = "13.3 in.";
myMac.year = "2017";
myMac["Serial Number"] = "35774-452w345";

console.log(myMac);

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 *
 */
myPhone.name = {
  firstName: 'Sophie',
  lastName: 'K'
};

console.log(myPhone);
console.log(myPhone.name);
console.log(myPhone.name.firstName);

myPhone.apps = ["Slack", "Instagram", "YouTube"];
console.log(myPhone);
// console.log(myPhone.apps[1]);

myPhone.apps.forEach(function(app){
  console.log(app);
});

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["Documents", "Downloads", "Pictures"];

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login = {
  username: "codytheduck",
  fakePassword: "quackquack",
  email: "cody@codeup.com"
};

console.log(myMac);

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

myPhone.call = function(){
  console.log("Dialing");
};

myPhone.call();
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

myMac.powerOn = function(){
  console.log("Powering On")
};

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function(){
  console.log("Current user: " + this.name.firstName + " " + this.name.lastName);
};

myPhone.currentUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myMac.currentUser = function(){
  console.log("Current user: " + this.login.username + "|" + this.login.email);
};

myMac.currentUser();
/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
      name: {
        firstName: "Spongebob",
        lastName: "Squarepants"
      },
      catchPhrase: function(){
        return "I'm Ready";
      },
      abilities: ["Karate", "Bubble Blowing", "Jelly Fishing"]
    },
    {
      name: {
        firstName: "Patrick",
        lastName: "Star"
      },
      catchPhrase: function(){
        return "No, this is Patrick";
      },
      abilities: ["Rock hiding", "Secret photo", "Wumbo"]
    },
    {
      name: {
        firstName: "Eugene",
        lastName: "Krabs"
      },
      catchPhrase: function(){
        return "MONEEEYYYY";
      },
      abilities: ["Take money", "Hide money", "Tiny violin"]
    },
    {
      name: {
        firstName: "Squidward",
        lastName: "Tentacles"
      },
      catchPhrase: function(){
        return "*nasal noise*";
      },
      abilities: ["Bad music", "Nag", "SQUILLIAM"]
    }

    ];
chooseYourFighter.forEach(function(fighter){
  console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
  console.log("Their abilities: ");

  fighter.abilities.forEach(function(ability){
    console.log(ability);
  });
  console.log("------------");
});