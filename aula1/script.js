var container = document.getElementById("container")
var abrir = document.getElementById("aberto")
var fechar = document.getElementById("fechado")

function aberto(texto){
    var paragrafo = document.createElement("p")
    paragrafo.innerText = texto
    paragrafo.style.color = "green"
    container.append(paragrafo)
}

function fechado(){
    paragrafo = document.querySelector("p")
    paragrafo.innerText = "Estamos fechados"
}

abrir.addEventListener("click", function (){
    aberto("Estamos abertos!")
})
fechar.addEventListener("click", fechado)