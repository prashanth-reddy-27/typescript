"use strict";
/*
Challenge 3:
Write a function that accepts either a string or a number and then returns a string
message describing the input type
*/
function checkType(data) {
    if (typeof data === "string") {
        return "You passed a string: \"".concat(data, "\"");
    }
    else if (typeof data === "number") {
        return "You passed a number: ".concat(data);
    }
    else {
        return "You passed a ".concat(typeof (data), " : ").concat(data);
    }
}
;
console.log(checkType("Hello"));
console.log(checkType(56));
// let nill=null;
console.log(checkType(null));
