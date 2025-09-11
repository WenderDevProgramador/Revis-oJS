'use strict'

const input1 = document.querySelector('#decifre1')
const button = document.querySelector('#converter')
const resultado = document.querySelector('#resultado')

const senhasPossiveis = (txt) => {
    const str = txt.toString().split(',');

    if (str.length <= 1) return [str];
    let allCombinations = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let combinationsOfRemaining = senhasPossiveis(remainingChars);
        for (let combination of combinationsOfRemaining) {
            allCombinations.push([char, ...combination]);
        }
    }
    return allCombinations;  
}
button.addEventListener('click', () => {
    const str = input1.value.split(',')
    const resultadoFinal = senhasPossiveis(str)
    resultado.innerHTML = `A quantidade de senhas possíveis é: <strong>${JSON.stringify(resultadoFinal)}</strong>`
})