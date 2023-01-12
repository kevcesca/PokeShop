import POKEMON_DATA from '../data/POKEMON_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
                resolve(POKEMON_DATA)
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = POKEMON_DATA.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'No se encontró ese producto'
                })
            }
        }, 500)
    })
}