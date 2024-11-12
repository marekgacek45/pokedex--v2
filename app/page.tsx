'use client'

import { useEffect, useState } from 'react'

export default function Home() {
	const [allPokemons, setAllPokemons] = useState<any[]>([])

	const getAllPokemons = async (limit = 50) => {
		const baseURL = 'https://pokeapi.co/api/v2/'

		const res = await fetch(`${baseURL}pokemon?limit=${limit}`)
		const data = await res.json()

		const promises = data.results.map(async (pokemon: any) => {
			const res = await fetch(pokemon.url)
			const data = await res.json()
			return data
		})
		const results = await Promise.all(promises)

		setAllPokemons(results)
	}

	useEffect(() => {
		getAllPokemons()
	}, [])

	return (
		<>
			{allPokemons.map((pokemon: any) => (
				<div key={pokemon.id}>
					<h1>{pokemon.name}</h1>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				</div>
			))}
		</>
	)
}
