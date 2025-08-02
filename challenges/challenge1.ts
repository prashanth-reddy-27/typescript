/*
challenge 1:-
Create a function that takes in a string and returns the length of the string 
Ensure you use typescript annotations

*/

const returnString=(name:string):number=>{
    return name.length;
}
let Username:string="hello";
console.log(`The length of the string ${Username} is ${returnString(Username)}`);