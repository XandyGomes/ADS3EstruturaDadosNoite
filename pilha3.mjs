import Stack from './lib/Stack.mjs';

let frase = 'Aibofobia'

let pilha = new Stack()

for(let i = 0; i< frase.length; i++){
    pilha.push(frase.charAt(i))
}

console.log(pilha.print())

let reverso = ''

while(! pilha.isEmpty){
    reverso =  reverso + pilha.pop()
}

console.log("Frase reversa: ",reverso)