const numeros = ["a", "L", "v", "o"]

// const numerosFiltrados = numeros.filter((numero)=>{
//     const numeroString = `${numero}`
//     return numero % 2 == 0 && numeroString[numeroString.length - 1] == 2
// })

const numerosSomado = numeros.reduce((acumulador, numeroAtual) =>{ 
    return acumulador+= numeroAtual
})
console.log(numerosSomado)

console.log(numeros.join(""))


// console.log("numeros sem Filtro >>>>>>>>>", numeros);
// console.log("numeros Filtrada >>>>>>>>>", numerosFiltrados);