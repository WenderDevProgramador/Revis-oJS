"use strict";

// Templates (mantidos no DOM, apenas clonados)
const xTemplate = document.querySelector('.x');
const oTemplate = document.querySelector('.o');

// Elementos
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('#buttons-container button');
const messageContainer = document.querySelector('#message');
const messageText = document.querySelector('#messagep');
const scoreBoardX = document.querySelector('#scoreboard-1');
const scoreBoardO = document.querySelector('#scoreboard-2');

let secondPlayer = null;       // 'ai-player' ou outro id de 2 jogadores
let currentPlayer = 'x';       // 'x' começa
let boardLocked = false;       // trava cliques enquanto a CPU joga
let cpuTimeoutId = null;       // evita jogada tardia da CPU após reset
let messageHideTimeout = null; // evita sumiço prematuro de mensagens

// Padrões de vitória (índices do NodeList boxes)
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6]             // diagonais
];

// Inicialização
init();

function init() {
    boxes.forEach(box => {
        box.addEventListener('click', () => handleBoxClick(box));
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            secondPlayer = btn.id;
            // Esconde os botões
            buttons.forEach(b => b.style.display = 'none');
            // Mostra o tabuleiro
            setTimeout(() => {
                const container = document.querySelector('#container');
                container.classList.remove('hide');
            }, 300);
        });
    });

    // Normaliza placar se vier vazio
    if (isNaN(parseInt(scoreBoardX.textContent))) scoreBoardX.textContent = '0';
    if (isNaN(parseInt(scoreBoardO.textContent))) scoreBoardO.textContent = '0';
}

// Clique do jogador humano
function handleBoxClick(box) {
    // Impede múltiplos cliques durante jogada da CPU
    if (boardLocked) return;

    // Em modo CPU, só humano joga quando for 'x'
    if (secondPlayer === 'ai-player' && currentPlayer !== 'x') return;

    // Casa ocupada não recebe jogada
    if (box.children.length > 0) return;

    placeMark(box, currentPlayer);
    nextTurn();
}

// Insere a marca no tabuleiro
function placeMark(box, player) {
    const tpl = player === 'x' ? xTemplate : oTemplate;
    box.appendChild(tpl.cloneNode(true));
}

// Avança o turno: verifica estado, alterna jogador e dispara CPU se necessário
function nextTurn() {
    const state = getGameState();
    if (state !== null) {
        endGame(state);
        return;
    }

    // Alterna
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

    // Se for CPU e é a vez do 'o', joga
    if (secondPlayer === 'ai-player' && currentPlayer === 'o') {
        boardLocked = true;
        // Pequeno delay para UX
        cpuTimeoutId = setTimeout(() => {
            cpuMove();
            boardLocked = false;
            nextTurn(); // após CPU jogar, checa estado e alterna
        }, 500);
    }
}

// Avalia estado do jogo: 'x', 'o', 'Velha' ou null (em andamento)
function getGameState() {
    const marks = Array.from(boxes).map(b => {
        const el = b.children[0];
        if (!el) return '';
        if (el.classList.contains('x')) return 'x';
        if (el.classList.contains('o')) return 'o';
        return ''; // fallback
    });

    // Vitória
    for (const [a, b, c] of winPatterns) {
        if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
            return marks[a]; // 'x' ou 'o'
        }
    }

    // Empate
    if (marks.every(m => m)) return 'Velha';

    return null; // jogo continua
}

// Finaliza rodada: mostra mensagem, atualiza placar e reseta
function endGame(result) {
    // Cancela qualquer jogada pendente da CPU
    if (cpuTimeoutId) {
        clearTimeout(cpuTimeoutId);
        cpuTimeoutId = null;
    }

    let msg = '';
    if (result === 'x') {
        scoreBoardX.textContent = (parseInt(scoreBoardX.textContent) || 0) + 1;
        msg = 'O jogador 1 venceu';
    } else if (result === 'o') {
        scoreBoardO.textContent = (parseInt(scoreBoardO.textContent) || 0) + 1;
        msg = 'O jogador 2 venceu!';
    } else {
        msg = 'Deu velha!';
    }

    showMessage(msg);
    resetBoard();
}

// CPU: joga 'o'
function cpuMove() {
    const empty = getEmptyBoxes();
    if (empty.length === 0) return;

    // 1) Tenta ganhar
    const winMove = findBestMove('o');
    if (winMove) {
        placeMark(winMove, 'o');
        return;
    }

    // 2) Tenta bloquear vitória do 'x'
    const blockMove = findBestMove('x');
    if (blockMove) {
        placeMark(blockMove, 'o');
        return;
    }

    // 3) Caso contrário, joga aleatório
    const randomBox = empty[Math.floor(Math.random() * empty.length)];
    placeMark(randomBox, 'o');
}

// Retorna casas vazias
function getEmptyBoxes() {
    return Array.from(boxes).filter(b => b.children.length === 0);
}

// Procura uma jogada que feche uma linha para 'player' ('x' ou 'o')
// Retorna o elemento .box da jogada, ou null
function findBestMove(player) {
    for (const [a, b, c] of winPatterns) {
        const trio = [boxes[a], boxes[b], boxes[c]];
        const marks = trio.map(bx => {
            const el = bx.children[0];
            if (!el) return '';
            if (el.classList.contains('x')) return 'x';
            if (el.classList.contains('o')) return 'o';
            return '';
        });

        const countPlayer = marks.filter(m => m === player).length;
        const countEmpty = marks.filter(m => m === '').length;

        // Se tem dois do 'player' e um vazio, essa é a jogada
        if (countPlayer === 2 && countEmpty === 1) {
            const emptyIndex = marks.findIndex(m => m === '');
            return trio[emptyIndex];
        }
    }
    return null;
}

// Mensagens com controle de timeout
function showMessage(text) {
    messageText.textContent = text;
    messageContainer.classList.remove('hide');
    if (messageHideTimeout) clearTimeout(messageHideTimeout);
    messageHideTimeout = setTimeout(() => {
        messageContainer.classList.add('hide');
    }, 3000);
}

// Limpa tabuleiro e estado de rodada
function resetBoard() {
    // Remove marcas
    document.querySelectorAll('.box div').forEach(el => el.remove());

    // Reseta turno e libera tabuleiro
    currentPlayer = 'x';
    boardLocked = false;

    // Garante que nenhum timeout órfão fique ativo
    if (cpuTimeoutId) {
        clearTimeout(cpuTimeoutId);
        cpuTimeoutId = null;
    }
}

// Botão de voltar ao início
const btnVoltar = document.querySelector('#btn-voltar');

btnVoltar.addEventListener('click', () => {
    // Cancela jogada pendente da CPU
    if (cpuTimeoutId) {
        clearTimeout(cpuTimeoutId);
        cpuTimeoutId = null;
    }

    // Limpa tabuleiro
    resetBoard();

    // (Opcional) Zera placar
    // scoreBoardX.textContent = '0';
    // scoreBoardO.textContent = '0';

    // Esconde tabuleiro e mostra botões iniciais
    document.querySelector('#container').classList.add('hide');
    buttons.forEach(b => b.style.display = 'inline-block');

    // Reseta estado do jogo
    currentPlayer = 'x';
    secondPlayer = null;
});