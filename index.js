const Personagem = require("./class/Personagem")

const personagem = new Personagem ('Gojo', 'feiticeiro',20000)
const personagem2 = new Personagem ('Hanaku', 'feiticeiro',3000)
const personagem3 = new Personagem ('Mizu', 'samurai', 90000)

personagem.atacar()
personagem.mostrarInfo()

personagem2.atacar()
personagem2.mostrarInfo()

personagem3.atacar()
personagem3.mostrarInfo()