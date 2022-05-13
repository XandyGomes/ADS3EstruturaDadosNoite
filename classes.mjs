//Normalmente se usa letra maiscula para declarar nome de classe
class FormaGeometrica{

    // variaveis privadas
    #base
    #altura
    #tipo
   
    //o construtor recebe dados externos: base, altura e tipo
    constructor(base, altura, tipo){

        //Validações
        // if(typeof base !== 'number' || base <= 0){
        //     throw new Error('ERRO: a base precisa ser numérica e maior que zero');
        // }
        // if(typeof altura !== 'number' || altura <= 0){
        //     throw new Error('ERRO: a altura precisa ser numérica e maior que zero');
        // }
        // if(tipo !== 'R' && tipo !== 'T' && tipo !== 'E'){
        //     throw new Error('ERRO: tipo deve ser R, T ou E');
        // }

        this.#base = base;
        this.#altura = altura;
        this.#tipo = tipo;

        // this.base = base;
        // this.altura = altura;
        // this.tipo = tipo;
    }
    //Funcções getters: têm a finalidade de tornar visiveis ao mundo externo informações privadas 
    get base(){
        return this.#base;
    }
    get altura(){
        return this.#altura;
    }
    get tipo(){
        return this.#tipo;
    }
    
    //Funcções setters: têm a finalidade de alterar a informações privadas que estão dentro da classe
   
   set base(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error('ERRO: a base precisa ser numérica e maior que zero');
        }
        this.#base = valor;
    }

    set altura(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error('ERRO: a altura precisa ser numérica e maior que zero');
        }
        this.#altura = valor;
    }

    set tipo(valor){
        if(!['R', 'T', 'E'].includes(valor)){
            throw new Error('ERRO: tipo deve ser R, T ou E');
        }
        this.#tipo = valor;
    }

    calcularArea(){
        switch(this.tipo){
            case 'R':
                return this.base * this.altura;
            case 'T':
                return (this.base * this.altura) / 2;
            case 'E':
                return ((this.base / 2) * (this.altura / 2) * Math.PI).toFixed(2);
        }
    }
}




let forma1 = new FormaGeometrica(15, 16, 'R');
let forma2 = new FormaGeometrica(14, 10, 'T');
let forma3 = new FormaGeometrica(20, 25, 'E');

// console.log(forma1.base, forma1.altura, forma1.tipo);

forma1.base = 7
forma1.altura = 8
forma1.tipo = 'E'

console.log("Área da forma 1: ", forma1.calcularArea()); 
console.log("Área da forma 2: ",forma2.calcularArea());
console.log("Área da forma 3: ",forma3.calcularArea());

