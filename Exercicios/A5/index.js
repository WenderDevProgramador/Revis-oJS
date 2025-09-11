'use strict'

const input1 = document.querySelector('#decifre1')
const button = document.querySelector('#converter')
const resultado = document.querySelector('#resultado')

const multPersist = (num) => {
    const arrayNum = num.split('').map(Number)

    if (arrayNum.length === 1) {
        return 0 // caso base: nenhum passo
    }

    const multiplicar = arrayNum.reduce((acc, curr) => acc * curr, 1)
    return 1 + multPersist(multiplicar.toString()) // soma 1 passo e continua
}

button.addEventListener('click', () => {
    const num1 = input1.value.trim()
    if (num1 === '') {
        resultado.innerHTML = 'Digite um número válido'
        return
    }
    const resposta = multPersist(num1)
    resultado.innerHTML = resposta
})