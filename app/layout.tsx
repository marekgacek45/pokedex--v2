import type { Metadata } from 'next'
import { ThemeProvider } from '@/app/components/theme/theme-provider'

import Header from '@/app/components/header'

import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pokedex',
	description: "Catch 'Em All!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${roboto.className} antialiased`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
