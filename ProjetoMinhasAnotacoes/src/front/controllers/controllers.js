class AnotacoesController{
    constructor(){
        this.anotacoes = []
    }
    addAnotacoes(titulo, anotacao){
        try {
            const nota = new Notas(titulo, anotacao)
            this.anotacoes = [...this.anotacoes, nota]
            this.mostraAnotacoes()
        } catch (error) {
            console.log(error.message)
        }
    }
    mostraAnotacoes(){
        console.log(this.anotacoes)
    }
}

const controller = new AnotacoesController()

botao.addEventListener('click', event =>{
    event.preventDefault()
    controller.addAnotacoes(tituloDOM.value, notaDom.value)
})