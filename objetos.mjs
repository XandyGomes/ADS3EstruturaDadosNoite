let forma1 = {
    base: 15,
    altura: 12,
    tipo: 'R' // R = retangulo
}

let forma2 = {
    base: 10,
    altura: 26,
    tipo: 'T' // T = triangulo
}

let forma3 = {
    base: 20,
    altura: 10,
    tipo: 'E' // Elipse
}

let forma4 = {
    base: 7.5,
    altura: 12.3,
    tipo: 'G' // ???
}

let forma5 = {
    base: 'batata',
    altura: 'cebola',
    tipo: 'E' // ???
}

function calcularArea(forma) {
    switch(forma.tipo){
        case 'R':   // retangulo
            return forma.base * forma.altura
        case 'T':   // triangulo
            return (forma.base * forma.altura) / 2
        case 'E':   // elipse
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:
            return null
    }
}

console.log(`Área de um retangulo de 15 x 12: ${calcularArea(forma1)}`)
console.log(`Área de um triangulo de 10 x 26: ${calcularArea(forma2)}`)
console.log(`Área de uma elipse de 20 x 10: ${calcularArea(forma3)}`)
console.log(`Área de um ??? de 7.5 x 12.3: ${calcularArea(forma4)}`)
console.log(`Área de um ??? de batata x cebola: ${calcularArea(forma5)}`)