// Instalação 

console.log(axios)

//  request 

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users',
            {
                headers: {
                    "Content-type": "application/json",
                    custom: "header",
                }
            }
        )




        return response.data

    } catch (error) {
        console.log(error)
    }
}


const btnV = document.querySelector('#ver')
const btnO = document.querySelector('#ocutar')
const ver = document.querySelector('#verDados')



btnV.addEventListener('click', async () => {
    const resposta = await getData()
    const div = document.createElement('div')
    div.classList.add('dados')
    resposta.forEach((user) => {
        const nome = document.createElement('h2')
        nome.innerText = `Nome: ${user.name} Email: ${user.email}`




        div.append(nome)

        ver.appendChild(div)
    })


})

btnO.addEventListener('click', () => {
    // Seleciona todos os <h2> dentro da div com id "verdados"
    const h2Elements = document.querySelectorAll('#verDados div');

    // Percorre e remove cada elemento
    h2Elements.forEach(h2 => h2.remove());
});

// post 

const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#body')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: titleInput.value, body: bodyInput.value, userId: 1,
    })
})