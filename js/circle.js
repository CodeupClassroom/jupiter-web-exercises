(function() {
    "use strict";

    // create a circle object

    // ************ START: The scope of the circle where we can use the THIS keyword starts here *********** //
    var circle = {
        radius: 3,
        area: 0, // created this extra property in the circle object so we can access the area from anywhere (after it is set, of course!)
        getArea: function () {
            // hint: area = pi * radius^2
            var calculatedArea = Math.PI * Math.pow(this.radius, 2);
            this.area = calculatedArea;
            return calculatedArea; // TODO: return the proper value
        },

        logInfo: function (doRounding) {

            console.log("The area calculated from getArea is this exact variable: " + this.area);

            // Create a variable to hold the area, while we check if we need to round or not
            var circleArea = this.getArea();

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                // this means we need to use the getArea method to retrieve the area and round it
                circleArea = Math.round(circleArea);
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };
    // ************ END: The scope of the circle where we can use the THIS keyword ends here *********** //


    console.log("The radius of the circle is: " + circle.radius);

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    // we want to reassign the radius of our "circle" object
    //  we know it's currently 3, and we want to reassign it to 5
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
