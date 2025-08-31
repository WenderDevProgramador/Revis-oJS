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
    // Limpar alternativas anteriores
    const oldButtons = answersBox.querySelectorAll('button');
    oldButtons.forEach((btn) => btn.remove());

    // Alterar o texto da pergunta
    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Criar alternativas
    questions[i].answers.forEach((answer, j) => {
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

        const letterBtn = answerTemplate.querySelector('.btn-letter'); // corrigido
        const answerText = answerTemplate.querySelector('.question-answer'); // corrigido

        letterBtn.textContent = letters[j];
        answerText.textContent = answer.answer;
        answerTemplate.setAttribute('correct-answer', answer.correct);

        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');

        answersBox.appendChild(answerTemplate);

        answerTemplate.addEventListener('click', function() {

        })
    });

    // Incrementar o número da questão

    actualQuestion++;
    


}



// Inicialização do quizz

init()
