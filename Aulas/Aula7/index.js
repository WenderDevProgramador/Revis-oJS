// Como adicionar elementos ao DOM

const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function () {
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

const eventButton = document.querySelector('#event-button');
const removeButton = document.querySelector('#remove-button');

const addH2 = () => {

    const main = document.querySelector('main');
    const newElement = document.createElement('h2');

    newElement.textContent = 'Novo H2';
    newElement.style.color = 'red';

    main.append(newElement);

    // Remover o evento de click do botão
    // 
}

eventButton.addEventListener('click', addH2);

removeButton.addEventListener('click', () => {
    eventButton.removeEventListener('click', addH2);
    alert('Evento removido');
});


// Objeto de eventos

// Argumento do evento

const MyTitle = document.querySelector('#my-title')

MyTitle.addEventListener('click', (event) => {
    console.log(event)


});

// Propragação de eventos

const containerBtn = document.querySelector('#btn-container')
const btnDiv = document.querySelector('#div-btn')




containerBtn.addEventListener('click', (event) => {
    console.log('Container clicado');
    
});

btnDiv.addEventListener('click', (event) => {
    
    event.stopPropagation(); // Impede a propagação do evento para o container

    console.log('Div clicada');
});

// Ação default do evento

const eventPrevent = document.querySelector("#event-sub");

eventPrevent.addEventListener('click', (event) => {
     // Impede o envio do formulário

    event.preventDefault()

    alert('Ação padrão do evento impedida!');
});

// Eventos de teclas

// keydown e keyup

document.addEventListener('keyup', (event) => {
    console.log(`Soltou: ${event.key}`);
});

document.addEventListener('keydown', (event) => {
    console.log(`Apertou: ${event.key}`);
});

// Eventos de mouse 

// click, dblclick, mousedown, mousemove, mouseup, scroll

const mouseEvent = document.querySelector('#eventos-mouse');

mouseEvent.addEventListener('mousedown', () => {
    console.log('Pressionou o mouse');
});


mouseEvent.addEventListener('dblclick', () => {
    console.log('Clicou duas vezes com o mouse');
    
});

mouseEvent.addEventListener('mouseup', () => {
    console.log('Soltou o mouse');
});

// document.addEventListener('mousemove', (event) => {
//     console.log(`Mouse movido para: X: ${event.x}, Y: ${event.y}`);
// });

window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 100) {
        console.log('Passamos de 200px de scroll');
    }
});

// Eventos de foco
const inputEvent = document.querySelector('#input-event');

inputEvent.addEventListener('focus', (e) => {
    console.log('Input focado');
});

inputEvent.addEventListener('blur', (e) => {
    console.log('Input desfocado');
});

// Eventos de carregamento de pagina 

window.addEventListener('load', (e) => {
    console.log('Página carregada');
});


// debounce 

const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        };

        timeoutId = setTimeout(() => {
            func.apply(args);
        }, delay);


    };
}

window.addEventListener('mousemove', debounce(() => {
    console.log('Executou o evento de mousemove');
}, 500));




