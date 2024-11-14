import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card'
import { Heart } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { Pokemon } from '@/interface'
import PokemonTypeBadge from './pokemon-type-badge'

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	return (
		<Card className='overflow-hidden group'>
			<CardHeader className=' flex justify-center items-center w-full bg-gray-300 dark:bg-gray-800'>
				<Link href='#'>
					<Image
						src={pokemon.sprites.other['official-artwork'].front_default}
						alt={`thumbnail of ${pokemon.name}`}
						width={200}
						height={200}
						className='w-full group-hover:scale-105 duration-300'
					/>
				</Link>
			</CardHeader>
			<CardContent className='bg-gray-100 dark:bg-gray-900'>
				<div className='flex justify-between items-center  pt-4 pb-2 px-6 sm:px-0'>
					<span className='text-gray-500 font-medium text-sm'>#{pokemon.id}</span>
					<button>
						<Heart className='text-red-500 fill-red-500' />
					</button>
				</div>
				<Link href='#'>
					<h2 className='text-2xl font-semibold text-center'>{capitalize(pokemon.name)}</h2>
				</Link>
			</CardContent>
			<CardFooter className='bg-gray-100 dark:bg-gray-900'>
				<div className='flex justify-center items-center gap-2 w-full'>
					{pokemon.types.map((type: any) => (
						<PokemonTypeBadge key={pokemon.name + type.type.name} type={type.type.name} />
					))}
				</div>
			</CardFooter>
		</Card>
	)
}

export default PokemonCard
