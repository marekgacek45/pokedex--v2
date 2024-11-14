export const offset = 50

export const getAllPokemons = async (limit = 50) => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon'

    const res = await fetch(`${baseURL}?limit=${limit}`)
    const data = await res.json()


    const promises = data.results.map(async (pokemon: {url: string}) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })
    const results = await Promise.all(promises)

    return results
}