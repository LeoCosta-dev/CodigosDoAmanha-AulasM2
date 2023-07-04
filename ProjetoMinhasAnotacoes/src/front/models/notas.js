class Notas{
    constructor(titulo, notas){
        this.titulo = this.validaTexto(titulo)
        this.notas = this.validaTexto(notas)
    }
    validaTexto(texto){
        if(typeof texto != "string"){
            throw new Error("Criação de notas - dados inválidos")
        }
        return texto
    }
}