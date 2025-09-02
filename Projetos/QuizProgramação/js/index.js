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
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            { "answer": "@var", "correct": false },
            { "answer": "var", "correct": true },
            { "answer": "$var", "correct": false },
            { "answer": "#let", "correct": false }
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            { "answer": ".", "correct": false },
            { "answer": "/", "correct": false },
            { "answer": "#", "correct": true },
            { "answer": "@", "correct": false }
        ]
    },
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            { "answer": "Sistema operacional", "correct": false },
            { "answer": "Banco de dados", "correct": false },
            { "answer": "back-end", "correct": true },
            { "answer": "front-end", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada para estruturar páginas web?",
        "answers": [
            { "answer": "C++", "correct": false },
            { "answer": "Python", "correct": false },
            { "answer": "HTML", "correct": true },
            { "answer": "Java", "correct": false }
        ]
    },
    {
        "question": "Qual propriedade CSS altera a cor do texto?",
        "answers": [
            { "answer": "font-color", "correct": false },
            { "answer": "text-style", "correct": false },
            { "answer": "color", "correct": true },
            { "answer": "background-color", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript remove o último elemento de um array?",
        "answers": [
            { "answer": "unshift()", "correct": false },
            { "answer": "pop()", "correct": true },
            { "answer": "shift()", "correct": false },
            { "answer": "push()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar um link?",
        "answers": [
            { "answer": "<href>", "correct": false },
            { "answer": "<url>", "correct": false },
            { "answer": "<a>", "correct": true },
            { "answer": "<link>", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git é usado para clonar um repositório?",
        "answers": [
            { "answer": "git init", "correct": false },
            { "answer": "git push", "correct": false },
            { "answer": "git clone", "correct": true },
            { "answer": "git pull", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é conhecida como linguagem de marcação?",
        "answers": [
            { "answer": "C#", "correct": false },
            { "answer": "HTML", "correct": true },
            { "answer": "PHP", "correct": false },
            { "answer": "JavaScript", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript exibe algo no console?",
        "answers": [
            { "answer": "log.console()", "correct": false },
            { "answer": "echo()", "correct": false },
            { "answer": "console.log()", "correct": true },
            { "answer": "print()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML define um texto alternativo para imagens?",
        "answers": [
            { "answer": "src", "correct": false },
            { "answer": "title", "correct": false },
            { "answer": "alt", "correct": true },
            { "answer": "href", "correct": false }
        ]
    },
    {
        "question": "Qual operador é usado para igualdade estrita em JavaScript?",
        "answers": [
            { "answer": "!=", "correct": false },
            { "answer": "===", "correct": true },
            { "answer": "==", "correct": false },
            { "answer": "=", "correct": false }
        ]
    },
    {
        "question": "Qual protocolo é usado para transferir páginas web?",
        "answers": [
            { "answer": "HTTP", "correct": true },
            { "answer": "FTP", "correct": false },
            { "answer": "SSH", "correct": false },
            { "answer": "SMTP", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript adiciona um elemento no final do array?",
        "answers": [
            { "answer": "shift()", "correct": false },
            { "answer": "push()", "correct": true },
            { "answer": "concat()", "correct": false },
            { "answer": "pop()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar uma lista ordenada?",
        "answers": [
            { "answer": "<list>", "correct": false },
            { "answer": "<ul>", "correct": false },
            { "answer": "<li>", "correct": false },
            { "answer": "<ol>", "correct": true }
        ]
    },
    {
        "question": "Qual comando no terminal exibe a lista de arquivos?",
        "answers": [
            { "answer": "pwd", "correct": false },
            { "answer": "mkdir", "correct": false },
            { "answer": "ls", "correct": true },
            { "answer": "cd", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Django?",
        "answers": [
            { "answer": "Python", "correct": true },
            { "answer": "PHP", "correct": false },
            { "answer": "Java", "correct": false },
            { "answer": "Ruby", "correct": false }
        ]
    },
    {
        "question": "Qual símbolo é usado para comentários de linha única em JavaScript?",
        "answers": [
            { "answer": "/*", "correct": false },
            { "answer": "#", "correct": false },
            { "answer": "//", "correct": true },
            { "answer": "<!--", "correct": false }
        ]
    },
    {
        "question": "Qual função PHP exibe texto na tela?",
        "answers": [
            { "answer": "print_r", "correct": false },
            { "answer": "echo", "correct": true },
            { "answer": "alert", "correct": false },
            { "answer": "console.log", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para inserir uma imagem?",
        "answers": [
            { "answer": "<pic>", "correct": false },
            { "answer": "<src>", "correct": false },
            { "answer": "<image>", "correct": false },
            { "answer": "<img>", "correct": true }
        ]
    }
];


const questionsSet2 = [
    {
        "question": "Qual tag HTML é usada para criar um parágrafo?",
        "answers": [
            { "answer": "<paragraph>", "correct": false },
            { "answer": "<text>", "correct": false },
            { "answer": "<pg>", "correct": false },
            { "answer": "<p>", "correct": true }
        ]
    },
    {
        "question": "Qual propriedade CSS altera o tamanho da fonte?",
        "answers": [
            { "answer": "font-style", "correct": false },
            { "answer": "size-font", "correct": false },
            { "answer": "text-size", "correct": false },
            { "answer": "font-size", "correct": true }
        ]
    },
    {
        "question": "Qual método JavaScript converte JSON para objeto?",
        "answers": [
            { "answer": "JSON.stringify()", "correct": false },
            { "answer": "parse.JSON()", "correct": false },
            { "answer": "JSON.parse()", "correct": true },
            { "answer": "toJSON()", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git cria um novo branch?",
        "answers": [
            { "answer": "git checkout nome", "correct": false },
            { "answer": "git new nome", "correct": false },
            { "answer": "git branch nome", "correct": true },
            { "answer": "git create nome", "correct": false }
        ]
    },
    {
        "question": "Qual extensão de arquivo é usada para JavaScript?",
        "answers": [
            { "answer": ".java", "correct": false },
            { "answer": ".jsx", "correct": false },
            { "answer": ".jvs", "correct": false },
            { "answer": ".js", "correct": true }
        ]
    },
    {
        "question": "Qual função PHP retorna o número de elementos de um array?",
        "answers": [
            { "answer": "elements()", "correct": false },
            { "answer": "count()", "correct": true },
            { "answer": "length()", "correct": false },
            { "answer": "size()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para títulos principais?",
        "answers": [
            { "answer": "<title>", "correct": false },
            { "answer": "<h1>", "correct": true },
            { "answer": "<head>", "correct": false },
            { "answer": "<header>", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal cria uma nova pasta?",
        "answers": [
            { "answer": "touch", "correct": false },
            { "answer": "mkdir", "correct": true },
            { "answer": "ls", "correct": false },
            { "answer": "cd", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Laravel?",
        "answers": [
            { "answer": "Python", "correct": false },
            { "answer": "JavaScript", "correct": false },
            { "answer": "Ruby", "correct": false },
            { "answer": "PHP", "correct": true }
        ]
    },
    {
        "question": "Qual método JavaScript remove o primeiro elemento de um array?",
        "answers": [
            { "answer": "pop()", "correct": false },
            { "answer": "unshift()", "correct": false },
            { "answer": "shift()", "correct": true },
            { "answer": "splice()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML define o endereço de uma imagem?",
        "answers": [
            { "answer": "src", "correct": true },
            { "answer": "link", "correct": false },
            { "answer": "alt", "correct": false },
            { "answer": "href", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git envia alterações para o repositório remoto?",
        "answers": [
            { "answer": "git send", "correct": false },
            { "answer": "git pull", "correct": false },
            { "answer": "git push", "correct": true },
            { "answer": "git commit", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript junta elementos de um array em uma string?",
        "answers": [
            { "answer": "merge()", "correct": false },
            { "answer": "concat()", "correct": false },
            { "answer": "join()", "correct": true },
            { "answer": "combine()", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework React?",
        "answers": [
            { "answer": "C#", "correct": false },
            { "answer": "JavaScript", "correct": true },
            { "answer": "PHP", "correct": false },
            { "answer": "Python", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal exibe o diretório atual?",
        "answers": [
            { "answer": "pwd", "correct": true },
            { "answer": "dir", "correct": false },
            { "answer": "ls", "correct": false },
            { "answer": "cd", "correct": false }
        ]
    },
    {
        "question": "Qual função PHP converte string para minúsculas?",
        "answers": [
            { "answer": "toLower()", "correct": false },
            { "answer": "strtolower()", "correct": true },
            { "answer": "lowercase()", "correct": false },
            { "answer": "strlow()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar uma lista não ordenada?",
        "answers": [
            { "answer": "<li>", "correct": false },
            { "answer": "<list>", "correct": false },
            { "answer": "<ul>", "correct": true },
            { "answer": "<ol>", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript retorna o índice de um elemento no array?",
        "answers": [
            { "answer": "position()", "correct": false },
            { "answer": "findIndex()", "correct": false },
            { "answer": "indexOf()", "correct": true },
            { "answer": "search()", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git baixa alterações do repositório remoto?",
        "answers": [
            { "answer": "git fetch", "correct": false },
            { "answer": "git clone", "correct": false },
            { "answer": "git pull", "correct": true },
            { "answer": "git push", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML abre um link em nova aba?",
        "answers": [
            { "answer": "new-tab", "correct": false },
            { "answer": "blank", "correct": false },
            { "answer": "target=\"_blank\"", "correct": true },
            { "answer": "open", "correct": false }
        ]
    }
];


// Terceiro conjunto de perguntas
const questionsSet3 = [
    {
        "question": "Qual linguagem é usada no framework Angular?",
        "answers": [
            { "answer": "PHP", "correct": false },
            { "answer": "Python", "correct": false },
            { "answer": "TypeScript", "correct": true },
            { "answer": "Java", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript ordena os elementos de um array?",
        "answers": [
            { "answer": "arrange()", "correct": false },
            { "answer": "sort()", "correct": true },
            { "answer": "sequence()", "correct": false },
            { "answer": "order()", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git inicializa um repositório?",
        "answers": [
            { "answer": "git start", "correct": false },
            { "answer": "git new", "correct": false },
            { "answer": "git create", "correct": false },
            { "answer": "git init", "correct": true }
        ]
    },
    {
        "question": "Qual propriedade CSS define a cor de fundo?",
        "answers": [
            { "answer": "fill-color", "correct": false },
            { "answer": "bg-color", "correct": false },
            { "answer": "background-color", "correct": true },
            { "answer": "color", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript retorna o maior número de uma lista?",
        "answers": [
            { "answer": "largest()", "correct": false },
            { "answer": "Math.high()", "correct": false },
            { "answer": "Math.max()", "correct": true },
            { "answer": "max()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para inserir um vídeo?",
        "answers": [
            { "answer": "<vid>", "correct": false },
            { "answer": "<video>", "correct": true },
            { "answer": "<movie>", "correct": false },
            { "answer": "<media>", "correct": false }
        ]
    },
    {
        "question": "Qual comando no terminal remove arquivos?",
        "answers": [
            { "answer": "remove", "correct": false },
            { "answer": "del", "correct": false },
            { "answer": "erase", "correct": false },
            { "answer": "rm", "correct": true }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Spring?",
        "answers": [
            { "answer": "C#", "correct": false },
            { "answer": "Java", "correct": true },
            { "answer": "Python", "correct": false },
            { "answer": "Kotlin", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript retorna a quantidade de caracteres de uma string?",
        "answers": [
            { "answer": ".chars()", "correct": false },
            { "answer": ".size()", "correct": false },
            { "answer": ".count()", "correct": false },
            { "answer": ".length", "correct": true }
        ]
    },
    {
        "question": "Qual atributo HTML é usado para formulários enviarem dados?",
        "answers": [
            { "answer": "submit", "correct": false },
            { "answer": "method", "correct": false },
            { "answer": "post", "correct": false },
            { "answer": "action", "correct": true }
        ]
    },
    {
        "question": "Qual comando Git exibe o histórico de commits?",
        "answers": [
            { "answer": "git show", "correct": false },
            { "answer": "git commits", "correct": false },
            { "answer": "git history", "correct": false },
            { "answer": "git log", "correct": true }
        ]
    },
    {
        "question": "Qual função JavaScript arredonda um número para baixo?",
        "answers": [
            { "answer": "Math.round()", "correct": false },
            { "answer": "Math.floor()", "correct": true },
            { "answer": "Math.down()", "correct": false },
            { "answer": "Math.ceil()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar uma tabela?",
        "answers": [
            { "answer": "<grid>", "correct": false },
            { "answer": "<tabela>", "correct": false },
            { "answer": "<tab>", "correct": false },
            { "answer": "<table>", "correct": true }
        ]
    },
    {
        "question": "Qual comando no terminal navega para outra pasta?",
        "answers": [
            { "answer": "goto", "correct": false },
            { "answer": "cd", "correct": true },
            { "answer": "ls", "correct": false },
            { "answer": "dir", "correct": false }
        ]
    },
    {
        "question": "Qual linguagem é usada no framework Flask?",
        "answers": [
            { "answer": "Ruby", "correct": false },
            { "answer": "PHP", "correct": false },
            { "answer": "Python", "correct": true },
            { "answer": "JavaScript", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript retorna um novo array filtrado?",
        "answers": [
            { "answer": "slice()", "correct": false },
            { "answer": "filter()", "correct": true },
            { "answer": "reduce()", "correct": false },
            { "answer": "map()", "correct": false }
        ]
    },
    {
        "question": "Qual atributo HTML define o texto exibido quando o mouse passa sobre o elemento?",
        "answers": [
            { "answer": "alt", "correct": false },
            { "answer": "title", "correct": true },
            { "answer": "tooltip", "correct": false },
            { "answer": "hover", "correct": false }
        ]
    },
    {
        "question": "Qual comando Git cria e muda para um novo branch?",
        "answers": [
            { "answer": "git new nome", "correct": false },
            { "answer": "git checkout -b nome", "correct": true },
            { "answer": "git switch nome", "correct": false },
            { "answer": "git branch nome", "correct": false }
        ]
    },
    {
        "question": "Qual função JavaScript retorna um número aleatório entre 0 e 1?",
        "answers": [
            { "answer": "random()", "correct": false },
            { "answer": "Math.rand()", "correct": false },
            { "answer": "Math.random()", "correct": true },
            { "answer": "rand()", "correct": false }
        ]
    },
    {
        "question": "Qual tag HTML é usada para criar um campo de entrada de texto?",
        "answers": [
            { "answer": "<text>", "correct": false },
            { "answer": "<textfield>", "correct": false },
            { "answer": "<field>", "correct": false },
            { "answer": "<input>", "correct": true }
        ]
    }
];

const questionsSet4 = [
    {
        "question": "Qual é o principal objetivo do JavaScript em uma página web?",
        "answers": [
            { "answer": "Formatar o conteúdo", "correct": false },
            { "answer": "Adicionar interatividade", "correct": true },
            { "answer": "Armazenar imagens", "correct": false },
            { "answer": "Gerar arquivos PDF", "correct": false }
        ]
    },
    {
        "question": "Qual método JavaScript é usado para converter uma string em número inteiro?",
        "answers": [
            { "answer": "parseInt()", "correct": true },
            { "answer": "toString()", "correct": false },
            { "answer": "parseFloat()", "correct": false },
            { "answer": "JSON.parse()", "correct": false }
        ]
    },
    {
        "question": "Qual palavra-chave é usada para criar uma constante em JavaScript?",
        "answers": [
            { "answer": "let", "correct": false },
            { "answer": "const", "correct": true },
            { "answer": "var", "correct": false },
            { "answer": "static", "correct": false }
        ]
    },
    {
        "question": "O que o método Array.includes() retorna?",
        "answers": [
            { "answer": "O índice do elemento", "correct": false },
            { "answer": "Um booleano", "correct": true },
            { "answer": "O último valor do array", "correct": false },
            { "answer": "Um objeto", "correct": false }
        ]
    },
    {
        "question": "Qual símbolo é usado para comentário de uma linha em JavaScript?",
        "answers": [
            { "answer": "//", "correct": true },
            { "answer": "/* */", "correct": false },
            { "answer": "#", "correct": false },
            { "answer": "<!-- -->", "correct": false }
        ]
    },
    {
        "question": "Qual desses é um framework front-end baseado em JavaScript?",
        "answers": [
            { "answer": "Laravel", "correct": false },
            { "answer": "React", "correct": true },
            { "answer": "Django", "correct": false },
            { "answer": "Flask", "correct": false }
        ]
    },
    {
        "question": "Qual método é usado para remover o último item de um array?",
        "answers": [
            { "answer": "pop()", "correct": true },
            { "answer": "shift()", "correct": false },
            { "answer": "splice()", "correct": false },
            { "answer": "delete()", "correct": false }
        ]
    },
    {
        "question": "Qual operador é usado para verificar igualdade estrita em JavaScript?",
        "answers": [
            { "answer": "==", "correct": false },
            { "answer": "===", "correct": true },
            { "answer": "!=", "correct": false },
            { "answer": "!==", "correct": false }
        ]
    },
    {
        "question": "Qual objeto é usado para manipular datas em JavaScript?",
        "answers": [
            { "answer": "Calendar", "correct": false },
            { "answer": "Date", "correct": true },
            { "answer": "Time", "correct": false },
            { "answer": "Clock", "correct": false }
        ]
    },
    {
        "question": "O que a função Math.random() retorna?",
        "answers": [
            { "answer": "Um número inteiro aleatório", "correct": false },
            { "answer": "Um número decimal entre 0 e 1", "correct": true },
            { "answer": "Um número negativo", "correct": false },
            { "answer": "Sempre o mesmo valor", "correct": false }
        ]
    },
    {
        "question": "Qual método converte um objeto em JSON?",
        "answers": [
            { "answer": "JSON.stringify()", "correct": true },
            { "answer": "JSON.parse()", "correct": false },
            { "answer": "toJSON()", "correct": false },
            { "answer": "Object.toString()", "correct": false }
        ]
    },
    {
        "question": "Qual evento é disparado quando um formulário é enviado?",
        "answers": [
            { "answer": "click", "correct": false },
            { "answer": "change", "correct": false },
            { "answer": "submit", "correct": true },
            { "answer": "input", "correct": false }
        ]
    },
    {
        "question": "Qual destes é um tipo de dado primitivo em JavaScript?",
        "answers": [
            { "answer": "Array", "correct": false },
            { "answer": "Object", "correct": false },
            { "answer": "String", "correct": true },
            { "answer": "Function", "correct": false }
        ]
    },
    {
        "question": "Qual função exibe uma mensagem em uma janela pop-up?",
        "answers": [
            { "answer": "alert()", "correct": true },
            { "answer": "prompt()", "correct": false },
            { "answer": "console.log()", "correct": false },
            { "answer": "confirm()", "correct": false }
        ]
    },
    {
        "question": "Qual operador lógico representa 'E' (AND) em JavaScript?",
        "answers": [
            { "answer": "||", "correct": false },
            { "answer": "&&", "correct": true },
            { "answer": "!", "correct": false },
            { "answer": "??", "correct": false }
        ]
    },
    {
        "question": "Qual método adiciona elementos ao final de um array?",
        "answers": [
            { "answer": "push()", "correct": true },
            { "answer": "unshift()", "correct": false },
            { "answer": "concat()", "correct": false },
            { "answer": "append()", "correct": false }
        ]
    },
    {
        "question": "Qual estrutura de repetição é usada quando não sabemos quantas vezes será repetido?",
        "answers": [
            { "answer": "for", "correct": false },
            { "answer": "while", "correct": true },
            { "answer": "foreach", "correct": false },
            { "answer": "map", "correct": false }
        ]
    },
    {
        "question": "Qual método retorna o tamanho de uma string?",
        "answers": [
            { "answer": "length()", "correct": false },
            { "answer": "size", "correct": false },
            { "answer": "length", "correct": true },
            { "answer": "count()", "correct": false }
        ]
    },
    {
        "question": "Qual é a função do operador spread (...)?",
        "answers": [
            { "answer": "Duplicar arrays", "correct": false },
            { "answer": "Espalhar elementos", "correct": true },
            { "answer": "Somar valores", "correct": false },
            { "answer": "Remover objetos", "correct": false }
        ]
    },
    {
        "question": "Qual das alternativas abaixo NÃO é um tipo de loop em JavaScript?",
        "answers": [
            { "answer": "for", "correct": false },
            { "answer": "while", "correct": false },
            { "answer": "repeat", "correct": true },
            { "answer": "do...while", "correct": false }
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
    const sets = [questionsSet1, questionsSet2, questionsSet3, questionsSet4];

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
