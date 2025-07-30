const animal = {
    nome: 'Bob',
    latir: function() {
        console.log('Au Au')
    },


}


console.log(animal)
animal.latir()


const pessoa = {
    nome: 'Amparo',
    getNome: function() {
        return this.nome;
    },

    setNome: function(novo) {
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


