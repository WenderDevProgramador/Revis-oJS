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


// altura e largura

const footer = document.querySelector('footer')
console.log(footer.clientHeight) // Altura do elemento
console.log(footer.clientWidth) // Largura do elemento
console.log(footer.offsetHeight) // Altura do elemento + padding + border
console.log(footer.offsetWidth) // Largura do elemento + padding + border


// posição do elemento

const product1 = product
console.log(product1.getBoundingClientRect()) // Mostra a posição do elemento em relação à viewport

// style do elemento
product1.style.color = '' // Altera a cor do texto
product1.style.backgroundColor = '' // Altera a cor de fundo
product1.style.padding = '' // Adiciona padding ao elemento

// HTMLCollection e NodeList são coleções de elementos retornadas por métodos como getElementsByClassName, getElementsByTagName (HTMLCollection) e querySelectorAll (NodeList). Ambas permitem acessar e manipular múltiplos elementos do DOM, mas possuem algumas diferenças:

// HTMLCollection é uma coleção "ao vivo", ou seja, se o DOM for alterado, a coleção refletirá essas mudanças automaticamente. Já NodeList pode ser "estática" (como a retornada por querySelectorAll), não refletindo alterações subsequentes no DOM.
// HTMLCollection só pode conter elementos, enquanto NodeList pode conter qualquer tipo de nó (elementos, textos, comentários, etc.).
// HTMLCollection não possui métodos como forEach, enquanto NodeList possui, facilitando a iteração sobre seus itens.
// Exemplo de iteração em NodeList  

const allProducts = document.querySelectorAll('.product')
allProducts.forEach(item => {
    item.style.color = ''
})

// Exemplo de iteração em HTMLCollection
const allProductsHTML = document.getElementsByClassName('product')


for(let item of allProductsHTML) {
    item.style.backgroundColor = ''
}