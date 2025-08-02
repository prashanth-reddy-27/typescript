/*
Challenge 3:
Write a function that accepts either a string or a number and then returns a string 
message describing the input type
*/

function checkType<DataType> (data:DataType): string  {
  if (typeof data === "string") {
    return `You passed a string: "${data}"`;
  } else if (typeof data === "number"){
    return `You passed a number: ${data}`;
  }
  else{
    return `You passed a ${typeof(data)} : ${data}`;
  }
};
console.log(checkType("Hello"));
console.log(checkType(56));
let nill=null;
console.log(checkType(nill));

