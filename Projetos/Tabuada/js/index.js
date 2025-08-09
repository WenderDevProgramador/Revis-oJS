
// Seleção de elementos do DOM

const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplication');

const multiplicationTable = document.querySelector('#multiplication-operations');

const multiplicationTitle = document.querySelector('#multiplication-title span');



// Funções

const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = '';
    for(let i = 1; i <= multiplicator; i++) {
        const result = number * i;
        const templete = `<div class="row"> <div class="operation">${number} X ${i} =</div> <div class="result">${result}</div> </div>`;


        const parse = new DOMParser();
        const htmlTemplate = parse.parseFromString(templete, 'text/html');
        const row = htmlTemplate.querySelector('.row');

        multiplicationTable.appendChild(row);

    }

    multiplicationTitle.innerText = `${number}`;

}

// Eventos

multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = Number(numberInput.value);
    const multiplication = Number(multiplicationInput.value);

    if(!number || !multiplication) return alert('Por favor, preencha os campos corretamente!');

    createTable(number, multiplication);
})