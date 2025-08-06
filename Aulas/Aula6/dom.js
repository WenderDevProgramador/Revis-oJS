// console.log(document.body)

// console.log(document.body.childNodes[1].childNodes[1].textContent)


// Selecionando elementos por tag, pode selecionar vários elementos


const listItens = document.getElementsByTagName('li')


console.log(listItens)

// Selecionando elementos por id, pode selecionar apenas um elemento

const title = document.getElementById('title')

console.log(title.textContent)

// Selecionando elementos por classe, pode selecionar vários elementos

const products = document.getElementsByClassName('product')

console.log(products)

// Selecionando elementos por seletor CSS, pode selecionar vários ou apenas um elemento
const product = document.querySelector('.product')

console.log(product)

// Selecionando vários elementos com querySelectorAll
const productList = document.querySelectorAll('.product')
console.log(productList)

// insertBefore => cria um elemento antes de outro elemento
const p = document.createElement('p')

const header = title.parentElement

p.textContent = 'Texto adicionado antes do título'
p.classList.add('text')

header.insertBefore(p, title)

// appendChild => adiciona um elemento ao final de outro elemento

const navLink = document.querySelector('nav ul')
const li = document.createElement('li')
const a = document.createElement('a')

li.classList.add('nav-link')
a.textContent = 'Link'
a.classList.add('nav-link')
a.setAttribute('href', 'https://www.google.com')
a.setAttribute('target', '_blank') // Define o link para abrir em nova aba
li.appendChild(a)
navLink.appendChild(li)

// replaceChild => substitui um elemento por outro

const h2 = document.createElement('h2')
h2.textContent = 'Estoque'
header.replaceChild(h2, title)

// removeChild => remove um elemento de outro elemento

header.removeChild(p)

// Criando nós de Texto
const mainContainer = document.querySelector('#main-container')
const textNode = document.createTextNode('Texto criado com createTextNode')
const h3 = document.createElement('h3')
h3.appendChild(textNode)
mainContainer.appendChild(h3)




// setAttibute => define o valor de um atributo de um elemento

const firstLink = document.querySelector('a')
firstLink.setAttribute('href', '#')


//  getAtribute => obtém o valor de um atributo de um elemento

console.log(firstLink.getAttribute('href'))



