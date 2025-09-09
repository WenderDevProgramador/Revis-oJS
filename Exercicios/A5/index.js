'use strict'

const input1 = document.querySelector('#decifre1')
const button = document.querySelector('#converter')
const resultado = document.querySelector('#resultado')
let result = 0
let vez = 0

const limpar = ()=> {
    input1.value = ''
    resultado.innerHTML = ''
    result = 0
    vez = 0
}

const multPersist = (num) => {
    const arrayNum = num.split('').map(num => Number(num) )

    

    // 999 -> 9*9*9 -> 729 -> 7*2*9 -> 126 -> 1*2*6 -> 12 -> 1*2 -> 2
    if(arrayNum.length === 1) {
        return result
    }

    const multiplicar = arrayNum.reduce((acc, curr) => acc * curr, 1)
    result++

    return multPersist(multiplicar.toString())
}

button.addEventListener('click', () => {
    if (vez > 0) {
        limpar()
    }
    const num1 = input1.value
    const resposta = multPersist(num1)
    resultado.innerHTML = resposta
    vez++
})