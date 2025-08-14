// Adicionando eventos

const btn = document.querySelector('#my-button')
const main = document.querySelector('main')

btn.addEventListener('click', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'red'
    div.style.color = '#fff'
    div.style.padding = '1rem'

    const h2 = document.createElement('h2')
    h2.innerText = 'Você criou um evento'

    div.appendChild(h2)

    main.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 5000)

})

