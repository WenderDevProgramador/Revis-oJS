'use strict';

const input = document.querySelector('#decifre1');
const btn = document.querySelector('#converter');
const getResult = document.querySelector('#resultado');

btn.addEventListener('click', () => {
    // Aceita números separados por vírgula ou espaço
    const valor = input.value.trim().split(/[\s,]+/).map(Number);
    const ver = new Equation(...valor);

    // Exibe com quebras de linha no HTML
    getResult.innerHTML = ver.getRoots().toString().replace(/\n/g, '<br>');
});

class Equation {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getRoots() {
        if (this.a === 0 && this.b === 0 && this.c === 0) {
            return 'Erro! Nenhum valor definido.';
        }

        if (this.a === 0 && this.b === 0) {
            return '';
        }

        // Caso seja equação de 1º grau
        if (this.a === 0) {
            const result = `
1. ${this.b}x + ${this.c} = 0
2. ${this.b}x = ${-this.c}
3. x = ${-this.c} / ${this.b}
4. x = ${(-this.c) / this.b}`;
            return `${(-this.c) / this.b}\n${result}`;
        }

        // Equação de 2º grau
        const delta = this.b ** 2 - 4 * this.a * this.c;
        if (delta < 0) {
            return 'Delta é negativo, não existe raiz real.';
        }

        const passoDelta = `1. Δ = b² - 4ac
2. Δ = ${this.b}² - 4 . ${this.a} . ${this.c}
3. Δ = ${this.b ** 2} - ${4 * this.a * this.c}
4. Δ = ${delta}
5. √Δ = √${delta}
6. √Δ = ${Math.sqrt(delta)}
7. x = (-b ± √Δ) / 2a
8. x = (-${this.b} ± ${Math.sqrt(delta)}) / 2 . ${this.a}
9. x₁ = (-${this.b} + ${Math.sqrt(delta)}) / ${2 * this.a}
10. x₁ = ${(-this.b + Math.sqrt(delta)) / (2 * this.a)}`;

        const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

        if (Number.isInteger(Math.sqrt(delta))) {
            return `${passoDelta}
11. x₂ = (-${this.b} - ${Math.sqrt(delta)}) / ${2 * this.a}
12. x₂ = ${x2}`;
        }

        return x1 === x2 ? x1 : `${x1}, ${x2}`;
    }
}