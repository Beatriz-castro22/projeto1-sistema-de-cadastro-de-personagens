class Personagem {
    #vida
    constructor(nome, classe, pontosDeVida){
        this.nome = nome 
        this.classe = classe
        this.#vida = pontosDeVida
    }

    atacar() {
        console.log(`o personagem ${this.nome}  da classe ${this.classe} Atacou!!`)
    }

    mostrarInfo(){
        console.log(`
            nome: ${this.nome} 
            classe:${this.classe}  
            pontos de vida: ${this.#vida}`)
    }
}

module.exports = Personagem