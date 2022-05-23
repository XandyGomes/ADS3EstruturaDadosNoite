import Queue from "./lib/Queue.mjs";

let fila = new Queue()

fila.enqueue('Alexandre')
fila.enqueue('João')
fila.enqueue('Maria')
fila.enqueue('Pedro')
fila.enqueue('Paulo')

console.log(fila.print())

let atendido = fila.dequeue()
console.log(`Atendido: ${atendido}`)
console.log(fila.print())

fila.enqueue('José')
fila.enqueue('Davi')
console.log(fila.print())

fila.dequeue()
fila.dequeue()
console.log(fila.print())

let proximo = fila.peek()
console.log(`Próximo: ${proximo}`)
console.log(fila.print())