/* 
Challenge 2:-
Define a interface for a "Person" object with properties 'name','age','email'.Then create a function that takes 
a Person object and prints its details.

*/
interface Person{
    name:string,
    age:number,
    email:string
}
const person:Person={
    name:"Matthew",
    age:25,
    email:"MattewDavidson@email.com"
}
function PrintDetails(person:Person):void{
    console.log(`The person name is ${person.name}`);
    console.log(`The person age is ${person.age}`);
    console.log(`The person email is ${person.email}`);


}
PrintDetails(person);