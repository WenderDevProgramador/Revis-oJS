// Como adicionar elementos ao DOM

const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function() {
    // Criar um novo elemento
    const main = document.querySelector('main');
    const newElement = document.createElement('div');

    newElement.classList.add('product');

    const productTitle = document.createElement('h2');
    productTitle.textContent = 'Novo Produto';
    newElement.style.color = 'white';


    // Adicionar o novo elemento ao DOM
    newElement.appendChild(productTitle)
    main.append(newElement);
});

// Removendo eventos do DOM

