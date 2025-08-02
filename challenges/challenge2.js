var person = {
    name: "Matthew",
    age: 25,
    email: "MattewDavidson@email.com"
};
function PrintDetails(person) {
    console.log("The person name is ".concat(person.name));
    console.log("The person name is ".concat(person.age));
    console.log("The person name is ".concat(person.email));
}
PrintDetails(person);
