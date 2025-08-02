"use strict";
let helloWorld = "Hello World";
console.log(helloWorld);
const user = {
    name: "Hayes",
    id: 0,
};
console.log(`the user name is ${user.name}`);
console.log(`the user id is ${user.id}`);
function logGraphDetails(graph) {
    const [a, b, c, d, ...rest] = graph;
    console.log(graph);
    console.log(a, b, c, d);
    console.log(rest);
    for (const i of rest) {
        console.log(`the variables in rest is ${i}`);
    }
}
const graph = Array.from({ length: 20 }, (_, i) => i);
logGraphDetails(graph);
