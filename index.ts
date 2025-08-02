let helloWorld:string = "Hello World";
console.log(helloWorld);
type User = {
  name: string;
  id: number;
}
const user: User = {
  name: "Hayes",
  id: 0,
};
console.log(`the user name is ${user.name}`);
console.log(`the user id is ${user.id}`);
function logGraphDetails(graph: number[]) {
  const [a, b, c, d, ...rest] = graph as [number, number, number, number, ...number[]];
  console.log(graph);
  console.log(a, b, c, d);
  console.log(rest);
  for (const i of rest) {
    console.log(`the variables in rest is ${i}`);
  }
}

const graph = Array.from({ length: 20 }, (_, i) => i);
logGraphDetails(graph);




