const animal = {
    nome: 'Bob',
    latir: function () {
        console.log('Au Au')
    },


}


console.log(animal)
animal.latir()


const pessoa = {
    nome: 'Amparo',
    getNome: function () {
        return this.nome;
    },

    setNome: function (novo) {
        this.nome = novo
    },
}

console.log(pessoa.getNome())
pessoa.setNome('Zé Naldo')
console.log(pessoa.getNome())


//prototype

const text = 'test'

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const myObj = {
    a: 'b'
}

console.log(Object.getPrototypeOf(myObj))

const mySecondObj = Object.create(myObj)

console.log(mySecondObj)

//classes básicas


const cachorro = {
    raca: null,
    patas: 4,

}

const pastorAlemao = Object.create(cachorro)

console.log(cachorro)


pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao)
console.log(pastorAlemao.patas)

// Função construtora 


function criarCachorro(nome, raca = 'Não definida') {
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}


const bob = criarCachorro('Bob', 'Vira Lata')
const roby = criarCachorro('Roby')

console.log(bob)
console.log(roby)

// Classes baseadas em funções   =>  new

class Cachorro {
    constructor(nome, raca = 'Não definida') {
        this.nome = nome
        this.raca = raca
    }

    mostra() {
        console.log(`Nome: ${this.nome}  Raça: ${this.raca}`)
    }
}

const husky = new Cachorro('Rabito')

Cachorro.prototype.latir = function () {
    console.log('Au au au auu')
}

husky.mostra()
husky.latir()



class Pet {
    constructor(tipo, nome, raca = 'Não definida') {
        this.tipo = tipo
        this.nome = nome
        this.raca = raca
    }

    cgar() {
        console.log('Cagar')
    }


}

const jeff = new Pet('Gato', 'Jeff')

console.log(jeff)
jeff.cgar()