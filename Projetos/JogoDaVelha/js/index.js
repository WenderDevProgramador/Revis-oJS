"use strict"

let x = document.querySelector('.x')
let o = document.querySelector('.o')

let boxes = document.querySelectorAll('.box')

let buttons = document.querySelector('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#messagep')


let secondPlayer;


// Contador de jogadas 

let player1 = 0
let player2 = 0

// adicionando o evento de click aos boxes



for (let i = 0; i < boxes.length; i++) {

    let el;

    boxes[i].addEventListener('click', function () {
        if (player1 === player2) {
            // x

            el = x;
        } else {
            // o

            el = o;
        }

        // Verifica se já tem x ou O


        if (this.children.length === 0) {
            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl)

            // Computar jogadas

            if (player1 === player2) {
                player1++
            } else {
                player2++
            }

            // Checar quem ganhou 

            checkWinCondition()
        }
    })
}

// Evento para saber se é dois players ou IA

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){

        secondPlayer = this.get
    })
}


// ver quem ganhou  

function checkWinCondition() {
    let b1 = document.querySelector('#block-1')
    let b2 = document.querySelector('#block-2')
    let b3 = document.querySelector('#block-3')
    let b4 = document.querySelector('#block-4')
    let b5 = document.querySelector('#block-5')
    let b6 = document.querySelector('#block-6')
    let b7 = document.querySelector('#block-7')
    let b8 = document.querySelector('#block-8')
    let b9 = document.querySelector('#block-9')

    // horizontal 1
    if (b1.children.length > 0 && b2.children.length > 0 && b3.children.length > 0) {
        let b1Child = b1.children[0].className;
        let b2Child = b2.children[0].className;
        let b3Child = b3.children[0].className;

        if (b1Child === 'x' && b2Child === 'x' && b3Child === 'x') {
            declarerWinner('x')
        } else if (b1Child === 'o' && b2Child === 'o' && b3Child === 'o') {
            declarerWinner('o')
        }
    }

    // horizontal 2
    if (b4.children.length > 0 && b5.children.length > 0 && b6.children.length > 0) {
        let b4Child = b4.children[0].className;
        let b5Child = b5.children[0].className;
        let b6Child = b6.children[0].className;

        if (b4Child === 'x' && b5Child === 'x' && b6Child === 'x') {
            declarerWinner('x')
        } else if (b4Child === 'o' && b5Child === 'o' && b6Child === 'o') {
            declarerWinner('o')
        }
    }

    // horizontal 3
    if (b7.children.length > 0 && b8.children.length > 0 && b9.children.length > 0) {
        let b7Child = b7.children[0].className;
        let b8Child = b8.children[0].className;
        let b9Child = b9.children[0].className;

        if (b7Child === 'x' && b8Child === 'x' && b9Child === 'x') {
            declarerWinner('x')
        } else if (b7Child === 'o' && b8Child === 'o' && b9Child === 'o') {
            declarerWinner('o')
        }
    }

    // vertical 1
    if (b1.children.length > 0 && b4.children.length > 0 && b7.children.length > 0) {
        let b1Child = b1.children[0].className;
        let b4Child = b4.children[0].className;
        let b7Child = b7.children[0].className;

        if (b1Child === 'x' && b4Child === 'x' && b7Child === 'x') {
            declarerWinner('x')
        } else if (b1Child === 'o' && b4Child === 'o' && b7Child === 'o') {
            declarerWinner('o')
        }
    }

    // vertical 2
    if (b2.children.length > 0 && b5.children.length > 0 && b8.children.length > 0) {
        let b2Child = b2.children[0].className;
        let b5Child = b5.children[0].className;
        let b8Child = b8.children[0].className;

        if (b2Child === 'x' && b5Child === 'x' && b8Child === 'x') {
            declarerWinner('x')
        } else if (b2Child === 'o' && b5Child === 'o' && b8Child === 'o') {
            declarerWinner('o')
        }
    }

    // vertical 3
    if (b3.children.length > 0 && b6.children.length > 0 && b9.children.length > 0) {
        let b3Child = b3.children[0].className;
        let b6Child = b6.children[0].className;
        let b9Child = b9.children[0].className;

        if (b3Child === 'x' && b6Child === 'x' && b9Child === 'x') {
            declarerWinner('x')
        } else if (b3Child === 'o' && b6Child === 'o' && b9Child === 'o') {
            declarerWinner('o')
        }
    }

    // diagonal principal
    if (b1.children.length > 0 && b5.children.length > 0 && b9.children.length > 0) {
        let b1Child = b1.children[0].className;
        let b5Child = b5.children[0].className;
        let b9Child = b9.children[0].className;

        if (b1Child === 'x' && b5Child === 'x' && b9Child === 'x') {
            declarerWinner('x')
        } else if (b1Child === 'o' && b5Child === 'o' && b9Child === 'o') {
            declarerWinner('o')
        }
    }

    // diagonal secundária
    if (b3.children.length > 0 && b5.children.length > 0 && b7.children.length > 0) {
        let b3Child = b3.children[0].className;
        let b5Child = b5.children[0].className;
        let b7Child = b7.children[0].className;

        if (b3Child === 'x' && b5Child === 'x' && b7Child === 'x') {
            declarerWinner('x')
        } else if (b3Child === 'o' && b5Child === 'o' && b7Child === 'o') {
            declarerWinner('o')
        }
    }

    // Deu velha

    let counter = 0

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].children[0] != undefined) {
            counter++
        }

        
    }

    if(counter === 9) {
        // Deu velha
        declarerWinner('Velha')
    }
}


// Limpa o jogo , declara o vencedor e atualiza o placar

function declarerWinner(winner) {
    
    let scoreBoardX = document.querySelector('#scoreboard-1')
    let scoreBoardO = document.querySelector('#scoreboard-2')
    let msg = ''


    if (winner === 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = 'O jogador 1 venceu'
    } else if(winner === 'o'){
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        msg = 'O jogador 2 venceu!'
    } else {
        msg = 'Deu velha!'
    }

    // Exibir mensagem
    

    messageText.textContent = msg
    messageContainer.classList.remove('hide')

    // Esconder mensagem

    setTimeout(() => {
        messageContainer.classList.add('hide')
    }, 4000)

    // Zerar as jogadas
    player1 = 0
    player2 = 0

    // removendo as marcações 

    let boxesToRemove = document.querySelectorAll('.box div')

    for(let i = 0; i < boxesToRemove.length ; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }

}

