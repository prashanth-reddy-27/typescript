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

let dataString: string = "hello";
let dataType: string = checkType(dataString);
console.log(dataType);  // You passed a string: "hello"

let dataNumber: number = 1;
dataType = checkType(dataNumber);
console.log(dataType);  // You passed a number: 1
