'use strict'

const input1 = document.querySelector('#decifre1')
const button = document.querySelector('#converter')
const resultado = document.querySelector('#resultado')

class Location {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    getSector(){
        if (this.x >= 0 && this.y >= 0 && this.z >= 0 ) {
            return 'Alfa'
        }
        if (this.x >= 0 && this.y >= 0 && this.z < 0 ) {
            return 'Beta'

        }

        if (this.x < 0 && this.y >= 0 && this.z < 0 ) {
            return 'Gama'
        }
        if (this.x < 0 && this.y >= 0 && this.z >= 0 ) {
            return 'Delta'
        }
        if (this.x < 0 && this.y < 0 && this.z >= 0 ) {
            return 'Epsilon'
        }
        if (this.x >= 0 && this.y < 0 && this.z >= 0 ) {
            return 'Zeta'
        }
        if (this.x >= 0 && this.y < 0 && this.z < 0 ) {
            return 'Eta'
        }
        if (this.x < 0 && this.y < 0 && this.z < 0 ) {
            return 'Theta'
        }
    }

    getDistance(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2)
    }   
        

    
}

button.addEventListener('click', () => {
    const coords = input1.value.split(',')
    const location = new Location(Number(coords[0]), Number(coords[1]), Number(coords[2]))
    resultado.innerHTML = `Setor: ${location.getSector()} <br> Distância: ${location.getDistance()}`
})
