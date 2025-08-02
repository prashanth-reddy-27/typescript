/*
Challenge 3:
Write a function that accepts either a string or a number and then returns a string 
message describing the input type
*/

const checkType = (data: number | string): string => {
  if (typeof data === "string") {
    return `You passed a string: "${data}"`;
  } else {
    return `You passed a number: ${data}`;
  }
};

console.log(checkType("Hello"));
console.log(checkType(56));
console.log(checkType("Hi"));

