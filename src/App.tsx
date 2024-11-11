import logo from './assets/logo.png'
import { ModeToggle } from './components/mode-toggle'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet'
import { Filter } from 'lucide-react'

function App() {
	return (
		<>
			<header className=' p-3 flex justify-between items-center w-full  bg-red-500 '>
				<ModeToggle />
				<img src={logo} alt='pokedex logo' className='w-[140px]' />
			<Sheet>
				<SheetTrigger>{<Filter className='w-6 h-6' />}</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your account and remove your data from our
							servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			</header>
		</>
	)
}

export default App
