'use client'
import { useState, useEffect, MouseEventHandler } from 'react'
import styles from '@/styles/navbar.module.css'
import LinkedInIcon from './navbar/LinkedInIcon'
import GitHubIcon from './navbar/GitHubIcon'
import Link from 'next/link'
import { off } from 'process'

type Props = {}

const Navbar = (props: Props) => {
	const [isMobile, setIsMobile] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	// set scrolled state to change background color on scroll
	useEffect(() => {
		const handleScroll = (): void => {
			window.scrollY > 90 ? setScrolled(true) : setScrolled(false)
		}
		window.addEventListener('scroll', handleScroll, { passive: true })
	}, [scrolled])

	const scrollToElement = async (elementId: string): Promise<void> => {
		/* const element: HTMLElement | null = await document?.getElementById(
			elementId
		)
		const elementDimensions: DOMRect | undefined =
			element?.getBoundingClientRect()
		const offset: number = 72
		const elementPosition = elementDimensions?.top - offset */
		if (elementId === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else if (elementId === 'work') {
			window.scrollTo({ top: 800, behavior: 'smooth' })
		} else if (elementId === 'about') {
			window.scrollTo({ top: 3210, behavior: 'smooth' })
		} else if (elementId === 'contact') {
			window.scrollTo({ top: 4045, behavior: 'smooth' })
		}
	}

	return (
		<nav className={scrolled ? styles.navbarMainScrolled : styles.navbarMain}>
			{/* logo */}
			<span
				className={scrolled ? styles.navbarLogoScrolled : styles.navbarLogo}>
				G William Boyd
			</span>
			{/* right links - desktop */}
			<div className={styles.rightLinksDesktop}>
				{/* site links */}
				<div className={styles.siteLinksDesktop}>
					<span
						className={styles.desktopLink}
						onClick={() => scrollToElement('home')}>
						Home
					</span>
					<span
						className={styles.desktopLink}
						onClick={() => scrollToElement('work')}>
						Work
					</span>
					<span
						className={styles.desktopLink}
						onClick={() => scrollToElement('about')}>
						About
					</span>
					<span
						className={styles.desktopLink}
						onClick={() => scrollToElement('contact')}>
						Contact
					</span>
				</div>
				{/* social links */}
				<div className={styles.socialLinks}>
					<a
						className={styles.socialLink}
						href='https://www.linkedin.com/in/gwilliamboyd/'
						target='_blank'>
						{/* <b>LI</b> */}
						<LinkedInIcon dimensions={36} />
					</a>
					<a
						className={styles.socialLink}
						href='https://github.com/gwilliamboyd'
						target='_blank'>
						{/* <b>GH</b> */}
						<GitHubIcon dimensions={36} />
					</a>
				</div>
			</div>
			{/* IF MOBILE - mobile menu */}
			{isMobile && (
				<div>
					{/* site links - mobile */}
					<div></div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
