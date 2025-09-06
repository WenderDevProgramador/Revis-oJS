const inputText = document.querySelector('#cesar');
const button = document.querySelector('#converter');
const resultado = document.querySelector('#resultado');
const numinput = document.querySelector('#num');

const decifrar = (inputText, numinput) => {
    const text = inputText.value;
    const num = parseInt(numinput.value, 10);
    const normalizeKey = num % 26;

    return text.split('').map(char => {
        const code = char.charCodeAt(0);

        // Maiúsculas
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 - normalizeKey + 26) % 26) + 65);
        }

        // Minúsculas
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 - normalizeKey + 26) % 26) + 97);
        }

        // Outros caracteres ficam iguais
        return char;
    }).join('');
};

button.addEventListener('click', () => {
    const textCifrado = decifrar(inputText, numinput);
    resultado.innerHTML = `Resultado: ${textCifrado}`;
});