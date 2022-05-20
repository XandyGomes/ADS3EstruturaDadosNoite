import Stack from "./lib/Stack.mjs";

let pilha = new Stack();
// console.log(pilha.print());
// console.log("Está vazia? ", pilha.isEmpty);

pilha.push(45)
pilha.push(35)
pilha.push(55)
pilha.push(65)

console.log(pilha.print());
console.log("Está vazia? ", pilha.isEmpty);

let removido = pilha.pop()
console.log("Removido: ",removido)


let ultimo = pilha.peek()
console.log("Último: ",ultimo)

console.log(pilha.print());

// pilha.unshift(10)