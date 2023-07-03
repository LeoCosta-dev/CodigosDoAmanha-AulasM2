function simples(numero){
    if(numero > 0){
        console.log("Deu tudo certo")
    } else {
        throw new Error("errado")
    }
}

try{
    simples()
} catch(erro){
    if(erro.message == "Deu tudo errado"){
        console.log("tentar de novo")
    } else {
        console.log("não sei o que aconteceu")
    }
}

console.log("FIM")