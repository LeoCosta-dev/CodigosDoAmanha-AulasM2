let qualquer = prompt("Digite se é salgado ou doce.")

switch(qualquer){
    case "doce":
    case "saboroso":
        console.log("Paçoca")
        break
    case "salgado":
        console.log("Risole")
        break
    default:
        console.log("Não uma comida gostosa!")
}


let pessoa = prompt("Qual o tipo de pessoa?")

let beneficio = /*pergunta*/pessoa === "pessoa física" ? /*resposta verdadeira*/"Beneficio Liberado":/*resposta falsa*/"Não existe beneficio"

alert(beneficio)

function teste(...infinitos){
    for (let i = 0; i < infinitos.length; i++) {
        console.log(infinitos[i])
    }
}