import type { Metadata } from 'next'
import { ThemeProvider } from '@/app/components/theme/theme-provider'

import Header from '@/app/components/header'

import './globals.css'


export const metadata: Metadata = {
	title: 'Pokedex',
	description: 'Pokedex',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={` antialiased`}>

				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>


					<Header />

					{children}


				</ThemeProvider>
			</body>
		</html>
	)
}
