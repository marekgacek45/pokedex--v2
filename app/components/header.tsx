import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { ModeToggle } from './theme/mode-toggle'
const header = () => {
	return (
		<header className=' p-3 flex justify-between items-center w-full  bg-red-500 '>
			<Image src={logo} alt='pokedex logo' className='w-[140px]' />
			<ModeToggle />
		</header>
	)
}

export default header
