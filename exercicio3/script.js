const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
//a
const pokeCopia = {...pokemon1, nome:"Squirtle", tipo: "Água",}

//console.log (pokemon1, pokeCopia)

//b
pokemon1.ataques = [];
pokemon1.ataques.push({
    nome: "Investida",
    dano:40,
    tipo: "Normal",
    precisao: 100,
})

//console.log(pokemon1)

//c
pokeCopia.ataques = [...pokemon1.ataques]

//e
pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
})

//e
pokeCopia.ataques.push({
    nome: "Jato de Agua",
    dano: 45,
    tipo: "Agua",
    precisao: 100,

})

console.log (pokemon1, pokeCopia)