class Carro{
    constructor(motor, portas, marca, modelo){
        this.motor = motor
        this.numeroDePortas = portas
        this.marca = marca
        this.modelo = modelo
        this.numeroDeRodas = 4
        this.vidros = true
        this.airBag = true
    }
    andar(){
        console.log(`O ${this.modelo} está andando! Vrum, vrum!`)
    }
    freiar(){
        console.log(`O ${this.modelo} está parando! Bibi!`)
    }
    venderSonho(){
        console.log("Olha o carro do SONHO!!!")
    }
}

class Uno extends Carro{
    constructor(motor,portas, cor, modelo){
        //...new Carro(motor, portas,"FIAT", modelo)
        super(motor, portas,"FIAT", modelo)
        this.cor = cor
    }
}



const unoReiDasEstradas = new Uno(1.5, 2, "prata", "Uno")

console.log(unoReiDasEstradas)

class Marea extends Uno{
    constructor(){
        super(2.0, 2, "verde pérola", "Marea")
    }
    explodir(){
        console.log("Boooooooooom!")
    }
}

const Mareao = new Marea()