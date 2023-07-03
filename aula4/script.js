// var objeto_turma = {
//     numero_facilitadores: 2,
//     numero_alunos: 50,
//     alunos:{
//         renato:{
//             nacionalidade: "sovietico",
//             timeDoCoracao: "Palmeiras"
//         }
//     },
//     funcao: function(){
//         console.log("sou uma função dentro de um objeto")
//     }
// }

// function teste(){

//     console.log(objeto_turma)

// }

// teste()

// objeto_turma.numero_alunos = 25

// console.log(objeto_turma)


var criar = document.getElementById("criar")
var comer = document.getElementById("comer")
var latir = document.getElementById("latir")
var exibir = document.getElementById("exibir")

var cachorroJSON = {
    "nome": "",
    "data_nascimento": "teste"
}

var cachorro2 = {
    nome: "",
    dataNascimento: "teste",
    darNome: function(){
        var nome = prompt("Batize com um nome bonitinho o seu au au.")
        this.nome = nome
        alert("O cachorro agora tem o nome de " + this.nome)
    },
    getNome: function(){
        return this.nome
    }
}

criar.addEventListener("click", function(){
    cachorro2.darNome()
})

//console.log(cachorro2)



