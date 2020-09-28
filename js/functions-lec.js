(function (){
    "use strict";
    /* **************************************
              Function Examples
     ****************************************/

    console.log(add(5, 5));
    console.log(add(undefined, 10));
    subtract(5,4);

    function add(x=0, y=0){
        // console.log(x + y);
        return x + y;
    }

    function subtract(x=0, y=0){
        // console.log(x - y);
        return x - y;
    }

    function sayHello(){
        return "hello";
    }

    var sum = add(10,9);
    // What we pass into these function calls are 'arguments'

    console.log(sum);
    console.log(add(1, 2));
    console.log(subtract(5, 4));

    //TODO: Answer this question. What is the difference between a function return vs console log?

    var multiply = function (x,y) {
        return x * y;
    };

    // If the function has a return, the call itself can be assigned to a variable to store the value.
    var product = multiply(6,7);

    multiply(8,9);

    //TODO: create a 'divide' function that divides two parameters

    var divide = function(x,y){
        return x/y;
    };


    console.log(divide(100,5));
    /* **************************************
              Arguments & Parameters
     ****************************************/

    //TODO: Answer these questions. How many parameters are in our 'add' function? How many arguments?
    //TODO: Modify the add and subtract functions to use default parameters.

    /* **************************************
              Global & Local Variables
     ****************************************/

    // These are considered Global to our JS file
    var name = "Sophie";
    var day = "Monday";

    function tellSophie(){
        return "Tell " + name + "it's " + day;
    }
    function greeting(){
        // This is a local variable
        var username = "Vivian";
        return "Hi " + username + "!";
    }

    console.log(name);
    // console.log(username);
    console.log(greeting());

    //TODO: Describe what is happening with the above console logs.
    //TODO: What happens if the variables are the same name? Test it out.


    function checkName(){
        // Local variables take precedence over any global variables with the same name.
        var day = "Tuesday";
        console.log(day);
    }

    //TODO: Which day will log to the console? Call the function to test it.

    /* **************************************
                      IIFE
     ****************************************/

    //TODO: Refactor all JS to be linked externally, and wrap all code in an IIFE.

})();