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


