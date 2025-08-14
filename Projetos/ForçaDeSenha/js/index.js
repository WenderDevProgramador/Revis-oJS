const passwordInput = document.querySelector('#passwordInput')

passwordInput.addEventListener('input', (e) => {
    const password = e.target.value;
    const strengthIndicator = document.querySelector('#password-strength-indicator')

    const strenghText = document.querySelector('#password-strength-text')

    const streghs = {
        0: 'Muito fraca',
        1: 'Fraca',
        2: 'Moderada',
        3: 'Forte',
        4: 'Muito forte',
    };

    let score = 0

    if (password.length >= 8) score++;

    const width = (score / 4) * 100;

    strengthIndicator.style.width = `${width}%`

    if (password.length > 0) {
        strenghText.innerHTML = `Força ${streghs[score]}`
    } else {
        strenghText.innerHTML = '';
        
    }
})