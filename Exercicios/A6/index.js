'use strict'

const input1 = document.querySelector('#decifre1')
const button = document.querySelector('#converter')
const resultado = document.querySelector('#resultado')

const senhasPossiveis = arr =>
    arr.length <= 1
        ? [arr]
        : arr.flatMap((c, i) =>
            senhasPossiveis([...arr.slice(0, i), ...arr.slice(i + 1)]).map(r => [c, ...r])
        )

button.onclick = () => {
    const res = senhasPossiveis(input1.value.split(','))
    resultado.innerHTML = `A quantidade de senhas possíveis é: <strong>${JSON.stringify(res)}</strong>`
}