import '../styles/globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Navbar from '../../components/Navbar'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'G William Boyd | Full-Stack Web Developer',
	description:
		'Full-Stack web developer based in Dallas, TX. I specialize in MERN Stack, React, Next.js and Node/Express backend development',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={jost.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
