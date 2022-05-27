import Deque from './lib/Deque.mjs'

let listaCompras = new Deque()
// console.log("Lista está vazia? ", listaCompras.isEmpty)
// console.log(listaCompras.print())

//Alimentícios
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Batata")
console.log("Lista está vazia? ", listaCompras.isEmpty)
console.log(listaCompras.print())

//Higiene/limpeza
listaCompras.insertBack("Água Sanitária")
listaCompras.insertBack("Sabão")
listaCompras.insertBack("Desinfetante")
console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Leite")
console.log(listaCompras.print())

let removido = listaCompras.removeBack()
console.log(`Removido: ${removido}`)
console.log(listaCompras.print())
listaCompras.removeFront()
console.log(`Removido: ${removido2}`)
console.log(listaCompras.print())

let proximo = listaCompras.peekFront()
console.log(`Próximo: ${proximo}`)
console.log(listaCompras.print())

let ultimo = listaCompras.peekBack()
console.log(`Último: ${ultimo}`)
console.log(listaCompras.print())