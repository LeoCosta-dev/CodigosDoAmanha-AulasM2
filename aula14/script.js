const obj1 = {
    nome: "Externo",
    mostrarNome:()=>{
        console.log(this.nome)
    }
}


const obj2 = {
    nome: "Interno"
}


let mostrarNome = obj1.mostrarNome.bind(obj2)
mostrarNome()

// objExterno.objInterno.qualquer()

// var nome = "Qualquer"
// console.log(nome)

// function teste(){
//     var nome = "Externo Função"
//     function teste2(){
//         var nome = "Interno Função"
//         console.log(nome)
//     }
//     teste2()
//     console.log(nome) 
// }

// const testeFunction = function(){
//     console.log("Função Anonima")
// }

// teste()

class classe1 {
    mostrarNome(){
        console.log("José das couves")
    }
}

class classe2 extends classe1{

}