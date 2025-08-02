/*
challenge 1:-
Create a function that takes in a string and returns the length of the string
Ensure you use typescript annotations

*/
var returnString = function (name) {
    return name.length;
};
var Username = "hello";
console.log("The length of the string ".concat(Username, " is ").concat(returnString(Username)));
