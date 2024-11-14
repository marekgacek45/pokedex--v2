import { Badge } from '@/app/components/badge'

const colors = {
	normal: { backgroundColor: '#A8A77A', fontLight: false },
	fire: { backgroundColor: '#EE8130', fontLight: true },
	water: { backgroundColor: '#6390F0', fontLight: true },
	electric: { backgroundColor: '#F7D02C', fontLight: false },
	grass: { backgroundColor: '#7AC74C', fontLight: true },
	ice: { backgroundColor: '#96D9D6', fontLight: false },
	fighting: { backgroundColor: '#C22E28', fontLight: true },
	poison: { backgroundColor: '#A33EA1', fontLight: true },
	ground: { backgroundColor: '#E2BF65', fontLight: false },
	flying: { backgroundColor: '#A98FF3', fontLight: true },
	psychic: { backgroundColor: '#F95587', fontLight: true },
	bug: { backgroundColor: '#A6B91A', fontLight: true },
	rock: { backgroundColor: '#B6A136', fontLight: true },
	ghost: { backgroundColor: '#735797', fontLight: true },
	dragon: { backgroundColor: '#6F35FC', fontLight: true },
	dark: { backgroundColor: '#705746', fontLight: true },
	steel: { backgroundColor: '#B7B7CE', fontLight: false },
	fairy: { backgroundColor: '#D685AD', fontLight: true },
}

const PokemonTypeBadge = ({ type }: { type: string }) => {
	const colorConfig = colors[type.toLowerCase() as keyof typeof colors]
	const baseColor = colorConfig?.backgroundColor || '#A8A77A'
	const fontColor = colorConfig?.fontLight ? 'text-white' : 'text-black'

	return (
		<Badge variant='outline' className={`text-xs ${fontColor}`} style={{ backgroundColor:baseColor,borderColor:baseColor }}>
			{type}
		</Badge>
	)
}

export default PokemonTypeBadge
