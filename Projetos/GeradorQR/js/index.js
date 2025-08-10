// Variaveis 

const container = document.querySelector('.container')
const qrCodeForm = document.querySelector('#qr-form button')

const qrCodeInput = document.querySelector('#qr-form input')


const qrCodeImg = document.querySelector('#qr-code img')

// Funções 

function generateQrCode() {

    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeForm.innerText = 'Gerando código...'

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`



    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
    })

    qrCodeForm.innerText = 'QR Gerado!'
    qrCodeInput.value = ''


}

// Eventos


qrCodeForm.addEventListener('click', () => {
    generateQrCode()

})

qrCodeInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        generateQrCode()
    }

})

qrCodeInput.addEventListener('click', (e) => {
    container.classList.remove('active');
    qrCodeForm.innerText = 'Gerar QR CODE'

})

