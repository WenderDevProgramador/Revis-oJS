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



class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    buzinar() {
        console.log('Buzina')
    }
    descreverCaminhao() {
        console.log(`Eixos: ${this.eixos}  Cor: ${this.cor}`)
    } 
}


const scania = new Caminhao(3, 'Branco')

Caminhao.prototype.motor = 8.0

scania.descreverCaminhao()
scania.buzinar()
console.log(scania.motor)


// override

class Humano {
    constructor(nome, idade= 'Não definida') {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

Humano.prototype.nome = 'Não informado'

const wender = new Humano('Wender', 30)
const maria = new Humano('Maria')
wender.falar()
maria.falar()

//sylbols em Classes

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
        
    }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;


const boing = new Aviao('Boeing', 4);
console.log(boing);
console.log(boing[asas]); 

// Getters e Setters
// get mostra alguma propiedade
// set altera alguma propriedade

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    get descricao() {
        return `${this.marca} - ${this.modelo}`;
    }

    set descricao(novaDescricao) {
        const partes = novaDescricao.split(' - ');
        this.marca = partes[0];
        this.modelo = partes[1];
    }
}

const meuCarro = new Carro('Toyota', 'Corolla');
console.log(meuCarro.descricao); 
meuCarro.descricao = 'Honda - Civic';
console.log(meuCarro.descricao);

// Herança 

// Usamos o extends para herdar propriedades e métodos de uma classe pai
// Usamos o super para chamar o construtor da classe pai

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Cachorro extends Mamifero {
    constructor(nome, raca, patas = 4) {
        super(patas);
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        console.log('Au Au');
    }
}

//instanceof 

console.log(Cachorro instanceof Mamifero); // true
const latido = new Cachorro('Rex', 'Labrador');
console.log(latido instanceof Cachorro); // true
console.log(latido instanceof Mamifero); // true


