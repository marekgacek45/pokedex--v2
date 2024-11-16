export interface Pokemon {
	id: number
	name: string
	url:string
    types: Array<Type>
	sprites: {
		front_default: string
		other: {
			'official-artwork': {
				front_default: string
			}
		}
	}
    
}

export interface Type {
	type: {
		name: string
        url: string
	}
}