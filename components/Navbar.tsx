'use client'
import { useState, useEffect, MouseEventHandler } from 'react'
import styles from '@/styles/navbar.module.css'
import LinkedInIcon from './navbar/LinkedInIcon'
import GitHubIcon from './navbar/GitHubIcon'
import Link from 'next/link'
import { off } from 'process'
import MobileMenuIcon from './navbar/MobileMenuIcon'
import { motion } from 'framer-motion'

type Props = {}

const Navbar = (props: Props) => {
	const [isMobile, setIsMobile] = useState(false)
	const [mobileOpen, setMobileOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	// set scrolled state to change background color on scroll
	useEffect(() => {
		const handleScroll = (): void => {
			window.scrollY > 90 ? setScrolled(true) : setScrolled(false)
		}
		window.addEventListener('scroll', handleScroll, { passive: true })
	}, [scrolled])

	// set scrolled to true if refresh happens while page is scrolled
	useEffect((): void => {
		window.scrollY > 90 ? setScrolled(true) : setScrolled(false)
	}, [])

	/* window.addEventListener('scroll', () => {
		console.log(window.scrollY)
	}) */

	// desktop
	const scrollToElement = (elementId: string): void => {
		if (elementId === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else if (elementId === 'work') {
			window.scrollTo({ top: 800, behavior: 'smooth' })
		} else if (elementId === 'about') {
			window.scrollTo({ top: 3210, behavior: 'smooth' })
		} else if (elementId === 'contact') {
			window.scrollTo({ top: 4045, behavior: 'smooth' })
		}
		setMobileOpen(false)
	}

	// mobile
	const scrollToMobile = (elementId: string): void => {
		if (elementId === 'work') {
			window.scrollTo({ top: 701, behavior: 'smooth' })
		} else if (elementId === 'about') {
			window.scrollTo({ top: 3628, behavior: 'smooth' })
		} else if (elementId === 'contact') {
			window.scrollTo({ top: 4885, behavior: 'smooth' })
		}
		setMobileOpen(false)
	}

	// show mobile menu media query
	useEffect(() => {
		const contentWatcher = window.matchMedia('(max-width: 900px)')
		setIsMobile(contentWatcher.matches)

		function updateIsMobile(e: any) {
			setIsMobile(e.matches)
		}
		if (contentWatcher.addEventListener) {
			contentWatcher.addEventListener('change', updateIsMobile)
			return function cleanup() {
				contentWatcher.removeEventListener('change', updateIsMobile)
			}
		} else {
			contentWatcher.addListener(updateIsMobile)
			return function cleanup() {
				contentWatcher.removeListener(updateIsMobile)
			}
		}
	}, [])

	return (
		<nav className={scrolled ? styles.navbarMainScrolled : styles.navbarMain}>
			{mobileOpen && (
				<motion.div className={styles.mobileMenuMaster}>
					<motion.span
						className={styles.mobileMenuLink}
						onClick={() => scrollToElement('home')}>
						Home
					</motion.span>
					<motion.span
						className={styles.mobileMenuLink}
						onClick={() => scrollToMobile('work')}>
						Work
					</motion.span>
					<motion.span
						className={styles.mobileMenuLink}
						onClick={() => scrollToMobile('about')}>
						About
					</motion.span>
					<motion.span
						className={styles.mobileMenuLink}
						onClick={() => scrollToMobile('contact')}>
						Contact
					</motion.span>
				</motion.div>
			)}
			{/* logo */}
			<span
				className={scrolled ? styles.navbarLogoScrolled : styles.navbarLogo}>
				G William Boyd
			</span>

			{/* right links - desktop */}
			<div className={styles.rightLinksDesktop}>
				{/* IF MOBILE - mobile menu */}
				{isMobile ? (
					<span
						className={styles.mobileMenuIconContainer}
						onClick={() => setMobileOpen(!mobileOpen)}>
						<MobileMenuIcon dimensions={40} />
					</span>
				) : (
					<>
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
					</>
				)}

				{/* site links */}
				{/* <div className={styles.siteLinksDesktop}>
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
				</div> */}
				{/* social links */}
				{/* <div className={styles.socialLinks}>
					<a
						className={styles.socialLink}
						href='https://www.linkedin.com/in/gwilliamboyd/'
						target='_blank'>
						<LinkedInIcon dimensions={36} />
					</a>
					<a
						className={styles.socialLink}
						href='https://github.com/gwilliamboyd'
						target='_blank'>
						<GitHubIcon dimensions={36} />
					</a>
				</div> */}
			</div>
		</nav>
	)
}

export default Navbar
