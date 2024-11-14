'use client'

import { useEffect, useState } from 'react'
import PokemonCard from './components/pokemon-card'
import PokemonCardSkeleton from './components/pokemon-card-skeleton'

import { Pokemon } from '@/interface'
import { getAllPokemons } from '@/api'
import { offset } from '@/api'

const Home = () => {
	const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const results = await getAllPokemons()
			setAllPokemons(results)
			setLoading(false)
		}

		fetchData()
	}, [])

	return (
		<main className='max-w-screen-2xl mx-auto px-12 2xl:px-0'>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-12'>
				{loading ? (
					<>
						{Array.from({ length: offset }).map((_, index) => (
							<PokemonCardSkeleton key={index} />
						))}
					</>
				) : (
					<>
						{allPokemons.map((pokemon: Pokemon) => (
							<PokemonCard key={pokemon.name + pokemon.id} pokemon={pokemon} />
						))}
					</>
				)}
			</div>
		</main>
	)
}

export default Home
