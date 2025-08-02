//strict

'use strict';

//opa = 'teste'

const opa = 'teste';

//const undefined = 'teste';

console.log(opa);

// console.log();

let a = 1
let b = 2;

if (a === 1) {
    a = b + 2;
}

console.log(a);

for(let i = 0; i < b; i++) {
    a = a + 2
    console.log(a);
}

if (a > 5) {
    a = 25
}

console.log(a)

// debugger

let c = 1
let d = 2;

if (c === 1) {
    c = d + 2;
}



for(let i = 0; i < d; i++) {
    c = c + 2
    console.log(c);
}

// Tratamento de dado por função

function checkNumber(n) {
    const result = Number(n);
    if (isNaN(result)) {
        console.log('O valor fornecido não é um número válido.');
        return
    }

    console.log(`O número fornecido é: ${result}`);

    return result;
}

checkNumber(5);
checkNumber('10');
checkNumber('abc');
checkNumber(undefined);
checkNumber(null);
checkNumber('123abc');
checkNumber({})
checkNumber(''); 
checkNumber('  '); 


// Exceptions

let x = 11;

if(x !== 11) {
    throw new Error('O valor de x não é igual a 11');
}  // throw new Error



// Tray Catch


try {
    let y = 5;
    let x = 10;
    let soma = x + y;
    console.log(`A soma de x e y é: ${soma}`);
} catch (error) {
    console.error('Ocorreu um erro:', error.message);
} finally {
    console.log('Bloco finally executado.');
}

// Assertions


function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error('O array não pode estar vazio.');
    } else {
        console.log('O array contém elementos:', arr);
    }

}

checkArray([1, 2, 3]);
checkArray([]); // Isso lançará um erro