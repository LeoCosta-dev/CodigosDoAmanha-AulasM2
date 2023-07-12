const alunos = {
    VictorMatheus: 2000,
    AnaCarol: 3500,
    Joao: 2500
}

const valorAumento = {
    VictorMatheus: 0,
    AnaCarol: 0,
    Joao: 0
}

const arrayValor = Object.entries(alunos)

const arrayDeAumentos = arrayValor.map((elemento, index)=>{
    console.log(index)
    const response = [elemento[0], 4000 - elemento[1]]
    valorAumento[response[0]] = response[1]
    return response
})

console.log(arrayDeAumentos)

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayNumerosMaisUm = arrayNumeros.map((elemento)=>{
    console.log(elemento)
})

arrayNumeros.forEach((elemento)=>{
    console.log(elemento)
})

function map(array){
    const response = []
for (let i = 0;i < array.length;i++) {
    const numero = array[i];
    console.log(numero)
    response.push(numero)
}

    return response
}

map(arrayNumeros)


for(numero of arrayNumeros){
    console.log(numero)
}



/*
  Utilize a classe meuArray para implementar os métodos funcionais map, forEach, filter, reduce
*/

class MeuArray {
    constructor(...elementos) {
        this.arr = [...elementos];
    }

    push(...elementos) {
        this.arr = [...this.arr, ...elementos];
    }

    pop() {
        const topo = this.arr.pop();
        return topo;
    }

    map(callback) {
        //criando cópia para que arr não possa ser modificado (sem efeitos colaterais)
        const copia = this.arr;
        const result = [];
        for (let elemento of copia) {
            result.push(callback(elemento));
        }

        return result;
    }

    /*
    insira aqui sua implementação de forEach, filter e reduce
    */
    forEach(callback){
        const copia = this.arr;
        for(let elemento of copia){
            callback(elemento);
        }
    }
}

//instanciando objeto MeuArray
const meuArr = new MeuArray("Olá", "Mundo!");
//testando implementação do MAP
const gritando = meuArr.map(el => el.toUpperCase());
meuArr.forEach(el => console.log(el))
console.log(gritando);
