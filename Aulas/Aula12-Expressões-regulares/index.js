"use strict"


const input = document.querySelector('#regex')

input.addEventListener('input', (e) => {
    "use strict"
    let valor = e.target.value
    const n = valor.replace(/\D/g, '')
    console.log(n)
})

