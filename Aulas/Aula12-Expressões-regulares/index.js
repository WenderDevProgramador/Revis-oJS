"use strict"


const input = document.querySelector('#regex')
const main = document.querySelector('main')
const div = document.createElement('div')
div.classList.add('dados')
div.style.display = 'none'


input.addEventListener('input', (e) => {
    "use strict"
    div.style.display = 'block'
    
    let valor = e.target.value

    if (!valor || valor === '' ) {
        div.style.display = 'none'
    }
    
    const n = valor.replace(/\D/g, '')

    div.innerText = n

    main.appendChild(div)


})

