
const inputValue = document.querySelector('#romano');

const btn = document.querySelector('#converter');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', () => {
    if (!inputValue.value) {
        resultado.textContent = 'Por favor, insira um valor em algarismos romanos.'
        return;
    } else {
        const valorRomano = inputValue.value.toUpperCase();
        romanNumerals(valorRomano);
    }
}

)

const romanNumerals = (str) => {
    const arrayRoman = str.split('');
    let total = 0;
    const romanToInt = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for (let i = 0; i < arrayRoman.length; i++) {
        const current = romanToInt[arrayRoman[i]];
        const next = romanToInt[arrayRoman[i + 1]]; 
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    resultado.textContent = `O valor em números é: ${total}`;
    return total;
}
