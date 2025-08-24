"use strict"

const banana = 'Fruta'

// delete Object.prototype;

function teste() {
    'use strict'
    const testando = 'teste'
}

teste()


let p = {a: 2, b: 1}

const btn = document.querySelector('#enviar')
const form = document.querySelector('#form')
const valor = document.querySelector('#number')

btn.addEventListener('click', () => {
    
    const n = +valor.value

    if (n) {
            
        alert(n + '   Valor enviado!')
        return n
    }else {
        alert('Digite um número para enviar')
        return null
    }
}
)



function saudacao(nome) {
    if(typeof nome !== 'string') {
        throw new Error('O parametro precisa ser uma string')
    } else {
        console.log(`Olá ${nome}!`)
    }
}

saudacao('Wender')



try {
    // Código que pode gerar erro
    let json = '{"nome": "Ana", "idade": 25}';
    let dados = JSON.parse(json); // Converte string para objeto

    console.log(dados.nome); // Funciona normalmente
} catch (erro) {
    // Código executado caso ocorra erro
    console.error("Ocorreu um erro:", erro.message);
} finally {
    // Este bloco SEMPRE é executado, com ou sem erro
    console.log("Finalizando a execução");
}