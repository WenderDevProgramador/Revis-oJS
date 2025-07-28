// Variaveis 

let nome = 'Wender'

console.log(nome)
nome = 'Wender Rodolfo De Queiroz'

console.log(nome)

const idade = 30

console.log(idade)

console.log(typeof nome, typeof idade)


let a = 5, b = 4, c = 10

// Variaveis não podem começar com número ou @
// É possivel fazer Variaveis distintas com o mesmo nome
// É permitido criar Variaveis om $ é _ 

const _name = 'Wender'
const $idade = 30

const handleClick = (ev) => {

    if (ev.className !== "Vermelho" && ev.className !== "Verde") {
        alert(`${nome} você tem ${idade} anos`)
        const cidade = prompt('Qual a sua cidade ?')
        alert(`Sua cidade é ${cidade}`)
    } else {
        if (ev.className === 'Verde') {
            alert('Você escolheu Verde')
        } else {
            alert('Você escolheu Vermelho')
        }
    }

}

const recursao = (n) => {
    console.log(n)
    if (n === 1) {
        return 0
    } else {


        return recursao(n - 1)

    }

}

console.log(recursao(20))



console.log(Math.max(5, 2, 1, 10)) // Retorna o número maior
console.log(Math.floor(5.14)) // Arredonda o número para inteiro menor

console.log(Math.ceil(5.14)) // Arredonda para inteiro maior



let array = [1, 2, 3]
let array1 = [4, 5, 6]

const numbers = array.concat(array1)

console.log(numbers)

const nom = 'minha avó está maluca'

console.log(nom.toUpperCase())
console.log(nom.toLowerCase())
console.log(nom.indexOf('v')) // Mostra a posição 

const person = {
    name: 'Zé',
    age: 31,
    job: 'Programador',

}

console.log(person.name.length)


const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 2000,
}

console.log(car)

car.doors = 4


console.log(car)

delete car.km

console.log(car)

// Uma const  de Objetos ou Array pode ser modificada!!

const obj = {
    a: 'teste',
    b: true,
}

const obj1 = {
    c: [],
}

Object.assign(obj1, obj)

console.log(obj1)



console.log(Object.keys(obj))
console.log(Object.keys(obj1))
console.log(Object.entries(obj))
console.log(Object.entries(obj1))


//Mutação 

const ab = {
    name: 'Wender'
}

const bc = ab

console.log(bc)

ab.age = 30

console.log(bc)


//Loops em arrays 

const users = ['Matheus', 'João', 'Pedro', 'Miguel']

for(let i = 0 ; i < users.length; i++) {
    console.log(users[i])
}

//Push e Pop 

users.push('Wender')

console.log(users)

users.pop()

const itemremovido = users.pop()


console.log(itemremovido)


//Shift e Unshift

const user = ['Matheus', 'João', 'Pedro', 'Miguel']

const primeiro = user.shift() // Remove a primeira

user.unshift('Wender') // Adiciona em primeiro



console.log(user)
console.log(primeiro)

//indexOf e lastIndexof

const myElements = ['Morango','Pera', 'Abacate','Maçã','Abacate']

console.log(myElements.indexOf('Abacate'))
console.log(myElements.lastIndexOf('Abacate'))
console.log(myElements[2],myElements[4])
console.log(myElements.indexOf('Mamão'))


// slice

const testSlice = ['a','b','c','d','e','f']

const subArray = testSlice.slice(2,4)
const subArray2 = testSlice.slice(2,4 + 1)
const subArray3 = testSlice.slice(10, 20)
const subArray4 = testSlice.slice(2)

console.log(testSlice)
console.log(subArray)
console.log(subArray2)
console.log(subArray3)
console.log(subArray4)

//forEach 

const numns = [1,2,3,4,5,6,7,8]

numns.forEach((num) => {
    console.log(`O numero é ${num}`)
})

const post = [
    {title: 'Primeiro post', category: 'PHP'},
    {title: 'Segundo post', category: 'JAVA'},
    {title: 'Terceiro post', category: 'Pyton'},
    {title: 'Quarto post', category: 'JavaScript'},
    {title: 'Quinto post', category: 'Rubi'}

]


post.forEach((post) => {
    console.log(`Exibindo post: ${post.title} Category: ${post.category}`)
})


// includes 

const brands = ['BMW', 'VW', 'Fiat']

if (brands.includes('Fiat')) console.log(`Temos carros da Fiat`)

//reverse 

const reverseT = [1,2,3,4,5,6,7]
console.log(reverseT)
reverseT.reverse() //Modifica o array
console.log(reverseT)

//trim

const trimTest = '   Wender     \n '
console.log(trimTest)
console.log(trimTest.trim())   // Remove os espaços extras na string
console.log(trimTest.length)
console.log(trimTest.trim().length)

//padStart 

const padStartTest = '1'

const newNumber = padStartTest.padStart(6, '0') //Adiciona algo no começo 
const padEndTeste = newNumber.padEnd(6,'0') // adiciona algo no fim 

console.log(newNumber)
console.log(padEndTeste)

//split 

const splitTeste = 'minha avó tá maluca'
const frase = splitTeste.split(' ')
console.log(frase)

//join 

const fraseJoin = frase.join(' ')
console.log(fraseJoin)
