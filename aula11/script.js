const data = new Date()

let contador = 0

while(contador < 1000000){
    contador++
}

tempo = (new Date() - data)

console.log(`Esse computador levou ${tempo} milisegundos para contar de 0 até ${contador}`)

const dataFutura = dayjs(data).add(45, 'days')

console.log(dataFutura.$d)

const dataPassada = dayjs(data).sub