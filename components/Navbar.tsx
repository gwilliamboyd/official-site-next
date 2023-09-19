'use client'
import { useState } from 'react'
import styles from '@/styles/navbar.module.css'

type Props = {}

const Navbar = (props: Props) => {
	const [isMobile, setIsMobile] = useState(false)
	return (
		<nav className={styles.navbarMain}>
			{/* logo */}
			<span className={styles.navbarLogo}>G William Boyd</span>
			{/* right links - desktop */}
			<div className={styles.rightLinksDesktop}>
				{/* site links */}
				<div className={styles.siteLinksDesktop}>
					<span className={styles.desktopLink}>Home</span>
					<span className={styles.desktopLink}>Work</span>
					<span className={styles.desktopLink}>About</span>
					<span className={styles.desktopLink}>Contact</span>
				</div>
				{/* social links */}
				<div>
					<span>
						<b>LI</b>
					</span>
					<span>
						<b>GH</b>
					</span>
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
