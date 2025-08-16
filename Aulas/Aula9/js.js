const bnt = document.querySelector('#Clique')

const bloco = () => {
    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.classList.add('bloco')
    div.style.backgroundColor = 'black'
    div.style.padding = '2rem'
    div.style.color = '#fff'
    div.style.width = '300px'

    const h2 = document.createElement('h2')
    h2.innerText = 'Você abriu uma div aqui....'

    div.appendChild(h2)
    main.appendChild(div)

    setTimeout(() => {
        h2.innerText = 'Fechando sua div...'
    }, 3000)

    setTimeout(() => {
        h2.innerText = 'Adeus...'
    }, 5000)

    setTimeout(() => {
        div.remove()
    }, 6000)
}

bnt.addEventListener('click', bloco)


const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

// filter

const users = [
    { name: 'Wender', avaible: true, category: 'frontend' },
    { name: 'Matheus', avaible: true, category: 'frontend' },
    { name: 'Valdo', avaible: true, category: 'backend' },
    { name: 'Nunes', avaible: false, category: 'frontend' },
    { name: 'Amanda', avaible: false, category: 'backend' }
]


const dispo = users.filter((user) => user.avaible)

//map

const novoUsers = users.map((user) => {
    if (user.category === 'backend' && user.avaible === true) {
        user.qualificação = 'Qualificado'
        return user
    } else {
        user.qualificação = 'Não qualificado'
        return user
    }
})

console.log(novoUsers)
console.log(novoUsers.filter((user) => user.qualificação === 'Qualificado'))

