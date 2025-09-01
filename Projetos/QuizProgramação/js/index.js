// Declaração de variaveis

const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];

let points = 0;
let actualQuestion = 0;

// Perguntas

const questionsSet1 = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            { "answer": "back-end", "correct": true },
            { "answer": "front-end", "correct": false },
            { "answer": "Sistema operacional", "correct": false },
            { "answer": "Banco de dados", "correct": false }
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            { "answer": "$var", "correct": false },
            { "answer": "var", "correct": true },
            { "answer": "@var", "correct": false },
            { "answer": "#let", "correct": false }
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            { "answer": "#", "correct": true },
            { "answer": ".", "correct": false },
            { "answer": "@", "correct": false },
            { "answer": "/", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada para estruturar páginas web?",
        "answers": [
            { "answer": "HTML", "correct": true },
            { "answer": "Python", "correct": false },
            { "answer": "C++", "correct": false },
            { "answer": "Java", "correct": false }
        ]
    },
    {
        "question": "Qual propriedade CSS altera a cor do texto?",
        "answers": [
            { "answer": "color", "correct": true },
            { "answer": "background-color", "correct": false },
            { "answer": "font-color", "correct": false },
            { "answer": "text-style", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript remove o último elemento de um array?",
        "answers": [
            { "answer": "pop()", "correct": true },
            { "answer": "push()", "correct": false },
            { "answer": "shift()", "correct": false },
            { "answer": "unshift()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar um link?",
        "answers": [
            { "answer": "<a>", "correct": true },
            { "answer": "<link>", "correct": false },
            { "answer": "<href>", "correct": false },
            { "answer": "<url>", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git é usado para clonar um repositório?",
        "answers": [
            { "answer": "git clone", "correct": true },
            { "answer": "git pull", "correct": false },
            { "answer": "git push", "correct": false },
            { "answer": "git init", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é conhecida como linguagem de marcação?",
        "answers": [
            { "answer": "HTML", "correct": true },
            { "answer": "JavaScript", "correct": false },
            { "answer": "PHP", "correct": false },
            { "answer": "C#", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript exibe algo no console?",
        "answers": [
            { "answer": "console.log()", "correct": true },
            { "answer": "print()", "correct": false },
            { "answer": "echo()", "correct": false },
            { "answer": "log.console()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML define um texto alternativo para imagens?",
        "answers": [
            { "answer": "alt", "correct": true },
            { "answer": "title", "correct": false },
            { "answer": "src", "correct": false },
            { "answer": "href", "correct": false }
        ]
    },
    {
        "question": "Qual operador é usado para igualdade estrita em JavaScript?",
        "answers": [
            { "answer": "===", "correct": true },
            { "answer": "==", "correct": false },
            { "answer": "=", "correct": false },
            { "answer": "!=", "correct": false }
        ]
    },
    {
        "question": "Qual protocolo é usado para transferir páginas web?",
        "answers": [
            { "answer": "HTTP", "correct": true },
            { "answer": "FTP", "correct": false },
            { "answer": "SMTP", "correct": false },
            { "answer": "SSH", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript adiciona um elemento no final do array?",
        "answers": [
            { "answer": "push()", "correct": true },
            { "answer": "pop()", "correct": false },
            { "answer": "shift()", "correct": false },
            { "answer": "concat()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar uma lista ordenada?",
        "answers": [
            { "answer": "<ol>", "correct": true },
            { "answer": "<ul>", "correct": false },
            { "answer": "<li>", "correct": false },
            { "answer": "<list>", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal exibe a lista de arquivos?",
        "answers": [
            { "answer": "ls", "correct": true },
            { "answer": "cd", "correct": false },
            { "answer": "pwd", "correct": false },
            { "answer": "mkdir", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Django?",
        "answers": [
            { "answer": "Python", "correct": true },
            { "answer": "Java", "correct": false },
            { "answer": "PHP", "correct": false },
            { "answer": "Ruby", "correct": false }
        ]
    },
    {
        "question": "Qual símbolo é usado para comentários de linha única em JavaScript?",
        "answers": [
            { "answer": "//", "correct": true },
            { "answer": "/*", "correct": false },
            { "answer": "#", "correct": false },
            { "answer": "<!--", "correct": false }
        ]
    },
    {
        "question": "Qual função PHP exibe texto na tela?",
        "answers": [
            { "answer": "echo", "correct": true },
            { "answer": "print_r", "correct": false },
            { "answer": "console.log", "correct": false },
            { "answer": "alert", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para inserir uma imagem?",
        "answers": [
            { "answer": "<img>", "correct": true },
            { "answer": "<image>", "correct": false },
            { "answer": "<src>", "correct": false },
            { "answer": "<pic>", "correct": false }
        ]
    }
];

const questionsSet2 = [
    {
        "question": "Qual tag HTML é usada para criar um parágrafo?",
        "answers": [
            { "answer": "<p>", "correct": true },
            { "answer": "<paragraph>", "correct": false },
            { "answer": "<text>", "correct": false },
            { "answer": "<pg>", "correct": false }
        ]
    },
    {
        "question": "Qual propriedade CSS altera o tamanho da fonte?",
        "answers": [
            { "answer": "font-size", "correct": true },
            { "answer": "text-size", "correct": false },
            { "answer": "size-font", "correct": false },
            { "answer": "font-style", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript converte JSON para objeto?",
        "answers": [
            { "answer": "JSON.parse()", "correct": true },
            { "answer": "JSON.stringify()", "correct": false },
            { "answer": "parse.JSON()", "correct": false },
            { "answer": "toJSON()", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git cria um novo branch?",
        "answers": [
            { "answer": "git branch nome", "correct": true },
            { "answer": "git new nome", "correct": false },
            { "answer": "git create nome", "correct": false },
            { "answer": "git checkout nome", "correct": false }
        ]
    },
    {
        "question": "Qual extensão de arquivo é usada para JavaScript?",
        "answers": [
            { "answer": ".js", "correct": true },
            { "answer": ".java", "correct": false },
            { "answer": ".jsx", "correct": false },
            { "answer": ".jvs", "correct": false }
        ]
    },
    {
        "question": "Qual função PHP retorna o número de elementos de um array?",
        "answers": [
            { "answer": "count()", "correct": true },
            { "answer": "size()", "correct": false },
            { "answer": "length()", "correct": false },
            { "answer": "elements()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para títulos principais?",
        "answers": [
            { "answer": "<h1>", "correct": true },
            { "answer": "<title>", "correct": false },
            { "answer": "<header>", "correct": false },
            { "answer": "<head>", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal cria uma nova pasta?",
        "answers": [
            { "answer": "mkdir", "correct": true },
            { "answer": "touch", "correct": false },
            { "answer": "cd", "correct": false },
            { "answer": "ls", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Laravel?",
        "answers": [
            { "answer": "PHP", "correct": true },
            { "answer": "JavaScript", "correct": false },
            { "answer": "Python", "correct": false },
            { "answer": "Ruby", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript remove o primeiro elemento de um array?",
        "answers": [
            { "answer": "shift()", "correct": true },
            { "answer": "pop()", "correct": false },
            { "answer": "unshift()", "correct": false },
            { "answer": "splice()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML define o endereço de uma imagem?",
        "answers": [
            { "answer": "src", "correct": true },
            { "answer": "href", "correct": false },
            { "answer": "alt", "correct": false },
            { "answer": "link", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git envia alterações para o repositório remoto?",
        "answers": [
            { "answer": "git push", "correct": true },
            { "answer": "git pull", "correct": false },
            { "answer": "git commit", "correct": false },
            { "answer": "git send", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript junta elementos de um array em uma string?",
        "answers": [
            { "answer": "join()", "correct": true },
            { "answer": "concat()", "correct": false },
            { "answer": "merge()", "correct": false },
            { "answer": "combine()", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework React?",
        "answers": [
            { "answer": "JavaScript", "correct": true },
            { "answer": "PHP", "correct": false },
            { "answer": "Python", "correct": false },
            { "answer": "C#", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal exibe o diretório atual?",
        "answers": [
            { "answer": "pwd", "correct": true },
            { "answer": "ls", "correct": false },
            { "answer": "cd", "correct": false },
            { "answer": "dir", "correct": false }
        ]
    },
    {
        "question": "Qual função PHP converte string para minúsculas?",
        "answers": [
            { "answer": "strtolower()", "correct": true },
            { "answer": "strlow()", "correct": false },
            { "answer": "lowercase()", "correct": false },
            { "answer": "toLower()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar uma lista não ordenada?",
        "answers": [
            { "answer": "<ul>", "correct": true },
            { "answer": "<ol>", "correct": false },
            { "answer": "<li>", "correct": false },
            { "answer": "<list>", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript retorna o índice de um elemento no array?",
        "answers": [
            { "answer": "indexOf()", "correct": true },
            { "answer": "findIndex()", "correct": false },
            { "answer": "search()", "correct": false },
            { "answer": "position()", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git baixa alterações do repositório remoto?",
        "answers": [
            { "answer": "git pull", "correct": true },
            { "answer": "git push", "correct": false },
            { "answer": "git fetch", "correct": false },
            { "answer": "git clone", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML abre um link em nova aba?",
        "answers": [
            { "answer": "target=\"_blank\"", "correct": true },
            { "answer": "new-tab", "correct": false },
            { "answer": "blank", "correct": false },
            { "answer": "open", "correct": false }
        ]
    }
];

// Terceiro conjunto de perguntas
const questionsSet3 = [
    {
        "question": "Qual linguagem é usada no framework Angular?",
        "answers": [
            { "answer": "TypeScript", "correct": true },
            { "answer": "Java", "correct": false },
            { "answer": "PHP", "correct": false },
            { "answer": "Python", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript ordena os elementos de um array?",
        "answers": [
            { "answer": "sort()", "correct": true },
            { "answer": "order()", "correct": false },
            { "answer": "arrange()", "correct": false },
            { "answer": "sequence()", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git inicializa um repositório?",
        "answers": [
            { "answer": "git init", "correct": true },
            { "answer": "git start", "correct": false },
            { "answer": "git create", "correct": false },
            { "answer": "git new", "correct": false }
        ]
    },
    {
        "question": "Qual propriedade CSS define a cor de fundo?",
        "answers": [
            { "answer": "background-color", "correct": true },
            { "answer": "color", "correct": false },
            { "answer": "bg-color", "correct": false },
            { "answer": "fill-color", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript retorna o maior número de uma lista?",
        "answers": [
            { "answer": "Math.max()", "correct": true },
            { "answer": "max()", "correct": false },
            { "answer": "largest()", "correct": false },
            { "answer": "Math.high()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para inserir um vídeo?",
        "answers": [
            { "answer": "<video>", "correct": true },
            { "answer": "<media>", "correct": false },
            { "answer": "<movie>", "correct": false },
            { "answer": "<vid>", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal remove arquivos?",
        "answers": [
            { "answer": "rm", "correct": true },
            { "answer": "del", "correct": false },
            { "answer": "erase", "correct": false },
            { "answer": "remove", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Spring?",
        "answers": [
            { "answer": "Java", "correct": true },
            { "answer": "Kotlin", "correct": false },
            { "answer": "C#", "correct": false },
            { "answer": "Python", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript retorna a quantidade de caracteres de uma string?",
        "answers": [
            { "answer": ".length", "correct": true },
            { "answer": ".size()", "correct": false },
            { "answer": ".count()", "correct": false },
            { "answer": ".chars()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML é usado para formulários enviarem dados?",
        "answers": [
            { "answer": "action", "correct": true },
            { "answer": "method", "correct": false },
            { "answer": "submit", "correct": false },
            { "answer": "post", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git exibe o histórico de commits?",
        "answers": [
            { "answer": "git log", "correct": true },
            { "answer": "git history", "correct": false },
            { "answer": "git commits", "correct": false },
            { "answer": "git show", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript arredonda um número para baixo?",
        "answers": [
            { "answer": "Math.floor()", "correct": true },
            { "answer": "Math.round()", "correct": false },
            { "answer": "Math.ceil()", "correct": false },
            { "answer": "Math.down()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar uma tabela?",
        "answers": [
            { "answer": "<table>", "correct": true },
            { "answer": "<tab>", "correct": false },
            { "answer": "<grid>", "correct": false },
            { "answer": "<tabela>", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal navega para outra pasta?",
        "answers": [
            { "answer": "cd", "correct": true },
            { "answer": "ls", "correct": false },
            { "answer": "dir", "correct": false },
            { "answer": "goto", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Flask?",
        "answers": [
            { "answer": "Python", "correct": true },
            { "answer": "PHP", "correct": false },
            { "answer": "Ruby", "correct": false },
            { "answer": "JavaScript", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript retorna um novo array filtrado?",
        "answers": [
            { "answer": "filter()", "correct": true },
            { "answer": "map()", "correct": false },
            { "answer": "reduce()", "correct": false },
            { "answer": "slice()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML define o texto exibido quando o mouse passa sobre o elemento?",
        "answers": [
            { "answer": "title", "correct": true },
            { "answer": "alt", "correct": false },
            { "answer": "hover", "correct": false },
            { "answer": "tooltip", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git cria e muda para um novo branch?",
        "answers": [
            { "answer": "git checkout -b nome", "correct": true },
            { "answer": "git branch nome", "correct": false },
            { "answer": "git switch nome", "correct": false },
            { "answer": "git new nome", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript retorna um número aleatório entre 0 e 1?",
        "answers": [
            { "answer": "Math.random()", "correct": true },
            { "answer": "random()", "correct": false },
            { "answer": "rand()", "correct": false },
            { "answer": "Math.rand()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar um campo de entrada de texto?",
        "answers": [
            { "answer": "<input>", "correct": true },
            { "answer": "<textfield>", "correct": false },
            { "answer": "<text>", "correct": false },
            { "answer": "<field>", "correct": false }
        ]
    }
];

let questions = [];


// Subistituição do quizz para a primeira Perguntas

function init() {
    // cria a primeira Perguntas
    // Limpa a variável questions
    questions = [];

    // Array com os três conjuntos
    const sets = [questionsSet1, questionsSet2, questionsSet3];

    // Sorteia um índice entre 0 e 2
    const randomIndex = Math.floor(Math.random() * sets.length);

    // Atribui o conjunto sorteado à variável questions
    questions = [...sets[randomIndex]];


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

        answerTemplate.addEventListener('click', function () {
            checkAnswer(this)

        })
    });

    // Incrementar o número da questão

    actualQuestion++;



}

// Verificando resposta do usuário

function checkAnswer(btn) {
    const buttons = answersBox.querySelectorAll('button');

    // Verificar se a resposta está correta

    buttons.forEach((button) => {
        if (button.getAttribute('correct-answer') === 'true') {
            button.classList.add('correct-answer')

            // Checa se o usuário acertou 
            if (btn === button) {
                // incrementar pontos

                points++;

            }

        } else {
            button.classList.add('wrong-answer')
        }
    });

    // Exibir proxima pergunta

    nextQuestion();

}

// Exibir proxima pergunta

function nextQuestion() {
    // Time para o verificar as respostas 

    setTimeout(
        () => {
            // Verificar se ainda há Perguntas
            if (actualQuestion >= questions.length) {
                // Apresentar a msg de sucesso
                showSuccessMenssage();
                return;


            }

            createQuestion(actualQuestion)
        },
        2000)
}

// Exibir a tela final

function showSuccessMenssage() {

    hideOrShowQuizz();


    // Trocar dados da tela de sucesso

    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector('#display-score span');
    displayScore.textContent = score.toString();

    // Alterar o número de perguntas corretas

    const correctAnswers = document.querySelector('#correct-answers')
    correctAnswers.textContent = points;

    // Alterar o total de perguntas

    const totalQuestions = document.querySelector('#questions-qty')
    totalQuestions.textContent = questions.length

}

// Mostra ou esconde o score 

function hideOrShowQuizz() {
    quizzContainer.classList.toggle('hide')
    scoreContainer.classList.toggle('hide')
}

// Reiniciar quizz

const restartBtn = document.querySelector('#restart')

restartBtn.addEventListener('click', () => {
    actualQuestion = 0
    points = 0
    hideOrShowQuizz()
    init()
})



// Inicialização do quizz

init()
