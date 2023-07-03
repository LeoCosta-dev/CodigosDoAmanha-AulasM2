// let qualquer = prompt("Digite se é salgado ou doce.")

// switch(qualquer){
//     case "doce":
//     case "saboroso":
//         console.log("Paçoca")
//         break
//     case "salgado":
//         console.log("Risole")
//         break
//     default:
//         console.log("Não uma comida gostosa!")
// }


// let pessoa = prompt("Qual o tipo de pessoa?")

// let beneficio = /*pergunta*/pessoa === "pessoa física" ? /*resposta verdadeira*/"Beneficio Liberado":/*resposta falsa*/"Não existe beneficio"

// alert(beneficio)

// function teste(...infinitos){
//     for (let i = 0; i < infinitos.length; i++) {
//         console.log(infinitos[i])
//     }
// }

class Fila {
    constructor(){
        this.enfileirados = []
    }
    adicionar(...pessoas){
        this.enfileirados = [...this.enfileirados, ...pessoas]
        console.log(this.enfileirados)
    }
    atender(){
        if(this.enfileirados.length <= 0){
            console.log("A fila já está zerada!")
        }
        this.enfileirados.shift()
        console.log(this.enfileirados)
    }
    atenderTodoMundo(){
        let repeat = this.enfileirados.length
        if(this.enfileirados.length <= 0){
            console.log("A fila já está zerada!")
        }
        for (let i = 0; i < repeat; i++) {
            this.atender()
        }
        console.log("fila zerada")
    }
}

const fila = new Fila()

fila.adicionar("Victor", "Denise", "Polemicos", "João")