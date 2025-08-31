// Declaração de variaveis

const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];

let points = 0;
let actualQuestion = 0;

// Perguntas

const questions = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
]

// Subistituição do quizz para a primeira Perguntas

function init() {
    // cria a primeira Perguntas
    createQuestion(0)
}

// Cria uma Pergunta

function createQuestion(i) {

    // Limpar a questão anterior
    const olButtons = answersBox.querySelectorAll('button')

    olButtons.forEach((btn) => {
        btn.remove();
    })

    // Alterar o texto da Pergunta

    const questionText = question.querySelector('#question-text')
    const questionNumber = question.querySelector('#question-number')

    questionText.textContent = question[i].question;
    questionNumber.textContent = i + 1

}


// Inicialização do quizz

init()
