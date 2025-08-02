"use strict";
/*
Challenge 3:
Write a function that accepts either a string or a number and then returns a string
message describing the input type
*/
var checkType = function (data) {
    if (typeof data === "string") {
        return "You passed a string: \"".concat(data, "\"");
    }
    else {
        return "You passed a number: ".concat(data);
    }
};
var dataString = "hello";
var dataType = checkType(dataString);
console.log(dataType); // You passed a string: "hello"
var dataNumber = 1;
dataType = checkType(dataNumber);
console.log(dataType); // You passed a number: 1
