
    function fabrica (nome, peso, raca){
        return {
            nome: nome,
            peso: peso,
            raca: raca,
            latir: function(){
                alert(`${this.nome}: auau`)
            },
            rosnar: function(){
                alert(`${this.nome}: grrrrr`)
            }
        }
    }
    
    function producaoEmMassa(nomes, pesos, racas){

        if(nomes.length === pesos.length && nomes.length === racas.length){
            
            var arrayObjetos = []
            for(var i = 0; nomes.length > i; i++){
                var objetoCachorro = fabrica(nomes[i], pesos[i], racas[i])
                arrayObjetos.push(objetoCachorro)
            }
            return arrayObjetos
        } else {
            console.log("Nenhum objeto criado, dever ter a mesma quantidade de nomes, pesos e raças")
        }
    }
    
    var nomes = ["Max", "Mel", "Sol"]
    var pesos = [35.2, 18.6, 2.5]
    var racas = ["Labrador", "SRD", "Pincher"]



// var nomes = ["Felícia", "Tiffany"];
// var racas = ["labrador", "vira-latas"]
// var peso = [35.2,18.6]

// function criarAnimal(nome,raca,peso){
    
//         this.nome = nome;
//         this.raca = raca;
//         this.peso = peso;
    
// }
// function criarAnimais(nome, racas tudo no plural dai)

for(var index = 0; index < 100; index++){
    console.log(index)
}