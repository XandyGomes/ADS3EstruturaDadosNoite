/*
    PILHA
    É uma estrutura de dados em que, usando uma lista linear (vetor) como
    base, permite inserções apenas no final e remoções também a partir do
    final.
    Com isso, temos o comportamento conhecido como LIFO = Last In, First Out
    (último a entrar, primeiro a sair).
    Pilhas são usadas em tarefas computacionais que requerem a inversão da
    ordem de entrada dos dados.
*/

let frase = 'Socorram-me, subi no ônibus em Marrocos'

let vetor = []

for (let i= 0; i< frase.length; i++) {
    vetor.push(frase.charAt(i))
}

console.log("Frase original: ",vetor)

// vetor.pop()
// vetor.pop()
// console.log(vetor)
// vetor.unshift('X')
// console.log(vetor)
// vetor.splice(23, 3)
// console.log(vetor)
// vetor.splice(11, 0, 'a', 'b', 'c')
// console.log(vetor)

let reverso = ''

while(vetor.length > 0){
    reverso = reverso + vetor.pop()
}

console.log("A frase é um palíndromo? :", reverso)