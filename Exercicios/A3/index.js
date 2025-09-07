'use strict';

const textInput1 = document.getElementById('decifre1');
const textInput2 = document.getElementById('decifre2');
const textInput3 = document.getElementById('decifre3');

const button1 = document.getElementById('converter');
const resultado = document.querySelector('#resultado');


const organizarTexto = (frase, comple, indices) => {
    'use strict';
    let fraseArray = frase.split('');

    indices.forEach((pos, i) => {
        // Ajusta posição considerando inserções anteriores
        let insertPos = pos + i;

        // Verifica se precisa de espaço antes
        if (insertPos > 0 && fraseArray[insertPos - 1] !== ' ') {
            comple = ' ' + comple;
        }

        // Verifica se precisa de espaço depois
        if (insertPos < fraseArray.length && fraseArray[insertPos] !== ' ') {
            comple = comple + ' ';
        }

        fraseArray.splice(insertPos, 0, comple);
    });

    return fraseArray.join('');
};

button1.addEventListener('click', () => {
    'use strict';
    const frase1 = textInput1.value;
    const frase2 = textInput2.value;
    const frase3 = textInput3.value.split(',').map(num => +num);

    resultado.textContent = organizarTexto(frase1, frase2, frase3)

    

});
