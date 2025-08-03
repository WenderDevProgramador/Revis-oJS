// setTimeout vai aguardar um tempo determinado para executar uma função ou código


console.log('Ainda não executou');

setTimeout(() => {
    console.log('Executou ');
}, 3000);

console.log('Ainda não executou 2');

// setInterval vai executar uma função ou código a cada intervalo de tempo determinado

setInterval(() => {
    
    console.log('Executou a cada 2 segundos')
    ;

}, 2000);

// Promises ==> São objetos que representam a eventual conclusão ou falha de uma operação assíncrona

const promessa = Promise.resolve(5 + 5);

console.log('Algum código')

promessa.then(value => { 
    console.log(`A somá é ${value}`);
    return value 
})
.then(value => {
    console.log(`O dobro é ${value * 2}`);
    return value 
})
.then(value => {
    console.log(`O triplo é ${value * 3}`)
    return value ;
})

console.log('Outro código')

// Falha na promisse

Promise.resolve(4 * 'asd')
.then((value) => {
    if(Number.isNaN(value)) {
        throw new Error('Valor inválido');
    }
    
}).catch((error) => {
    console.error(`Erro: ${error}`);
})

// reject é usado para rejeitar uma promessa

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if( n > 10) {
            resolve('Número maior que 10');
        } else{
            reject(new Error('Número menor ou igual a 10'));
        }
    })
}

const a = checkNumber(5)
const b = checkNumber(15)

a.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(`Erro: ${error}`);
})

b.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(`Erro: ${error}`);
})


// all 

const p1 = new Promise((resolve, reject) => {
    setTimeout( function() {
        resolve(10)
    }, 2000);

})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject(new Error('Valor inválido'));
    }

})

Promise.all([p1, p2, p3])
.then((values) => {
    console.log(`Valores: ${values}`);
})
.catch((error) => {
    console.error(`Erro: ${error}`);
})


// async Functions 

async function somarDois(a,b) {
    return a + b;
}

somarDois(5, 10).then((value) => {
    console.log(`A soma é: ${value}`);
}).catch((error) => {
    console.error(`Erro: ${error}`);
});

console.log('Código após a função assíncrona');

// async/await

// await é usado para esperar a resolução de uma promessa dentro de uma função assíncrona


function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolução com delay');
        }, 4000)
}
    )
}

async function chamadaAsync() {
    console.log('Iniciando chamada assíncrona');
    const resultado = await resolveComDelay();
    console.log(`Resultado: ${resultado}`);
}

chamadaAsync()

// Generators 
// Generators são funções que podem ser pausadas e retomadas, permitindo a produção de uma sequência de valores ao longo do tempo.

// function* 
// yield


function* gerador() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = gerador();
console.log(gen.next().value); // { value: 1, done: false }
console.log(gen.next().value); // { value: 2, done: false }
console.log(gen.next().value);