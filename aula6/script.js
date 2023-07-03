// var carro = {
//     cor: "verde",
//     capacidadeDeCombustivel: 56,
//     combustivel: 56,
//     consumo: 15,
//     rodar: function(km){
//         var autonomia = this.combustivel * this.consumo
//         if(km <= autonomia && km > 0){
//             var cons = km / 15
//             this.combustivel = this.combustivel - cons
//         } else {
//             console.log("Não há combustivel suficiente")
//         }   
//     },
//     getCombustivel: function(){
//         return this.combustivel
//     },
//     setCombustivel: function(volume){
//         this.combustivel = volume
//         return this.combustivel
//     }
// }






// Montar o objeto de requisição
var req = new XMLHttpRequest()


var pokemonName = "ditto"
// Montar a requisição em sí
req.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

// Definir a espera da resposta
req.onload = function () {
    if(req.status == 200){
        var respObj = JSON.parse(req.responseText)
        console.log(respObj)
    }
}

// Enviar a requisição
req.send()





















