'use client'
import styles from '@/styles/home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// images
import crossArmsTall from '../public/images/cross-arms-tall.jpg'
import crossArmsCrop from '../public/images/cross-arms-crop.jpg'
// icons
import mernIcon from '../public/images/icons/mern-stack-icon.png'
import reactIcon from '../public/images/icons/react-icon.png'
import nextJsIcon from '../public/images/icons/next-js-icon.png'
import reduxIcon from '../public/images/icons/redux-icon.png'
// components
import HomeSkill from './home/HomeSkill'
import HomeHeading from './home/HomeHeading'
import HomeImage from './home/HomeImage'
// framer motion
import { motion } from 'framer-motion'
import { stagger } from 'framer-motion/dom'

type Props = {}

const HomeInfo = (props: Props) => {
	const [isMobile, setIsMobile] = useState(false)
	// show mobile image if mobile
	useEffect(() => {
		const contentWatcher: MediaQueryList =
			window.matchMedia('(max-width: 600px)')
		setIsMobile(contentWatcher.matches)

		function updateIsMobile(e: any): void {
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
		<section
			id='home'
			className={styles.homeMaster}>
			<div className={styles.homeContainer}>
				{/* <HomeImage imageSrc={crossArmsTall} /> */}
				<Image
					className={styles.homeImage}
					src={isMobile ? crossArmsCrop : crossArmsTall}
					alt='G William Boyd - Arms Crossed'
					width={0}
					height={0}
					/* width={504}
					height={755} */
					sizes='(min-width: 1220px) 504px, (min-width: 920px) 380px, (min-width: 620px) 280px, 320px'
				/>
				<div className={styles.homeText}>
					<div className={styles.homeHeader}>
						<HomeHeading />
						{/* <motion.span
							className={styles.homeName}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ ease: 'easeIn', duration: 0.9 }}>
							G William Boyd
						</motion.span>
						<motion.span
							className={styles.homeSubtitle}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5, ease: 'easeIn', duration: 0.9 }}>
							Full-Stack Web Developer
						</motion.span> */}
					</div>
					<div className={styles.homeSkills}>
						<HomeSkill
							delayTime={0.8}
							iconSrc={mernIcon}
							skillTitle='MERN Stack'
						/>
						<HomeSkill
							delayTime={1.1}
							iconSrc={reactIcon}
							skillTitle='React'
						/>
						<HomeSkill
							delayTime={1.4}
							iconSrc={nextJsIcon}
							skillTitle='Next.js'
						/>
						<HomeSkill
							delayTime={1.7}
							iconSrc={reduxIcon}
							skillTitle='Redux Toolkit'
						/>
						{/* <motion.span
							className={styles.homeSkill}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.8, ease: 'easeIn', duration: 0.9 }}>
							<Image
								src={mernIcon}
								alt='MERN stack icon'
								width={40}
								height={40}
							/>
							<span>MERN Stack</span>
						</motion.span>
						<motion.span
							className={styles.homeSkill}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 1.1, ease: 'easeIn', duration: 0.9 }}>
							<Image
								src={reactIcon}
								alt='React icon'
								width={40}
								height={40}
							/>
							<span>React</span>
						</motion.span>
						<motion.span
							className={styles.homeSkill}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 1.4, ease: 'easeIn', duration: 0.9 }}>
							<Image
								src={nextJsIcon}
								alt='Next.js icon'
								width={40}
								height={40}
							/>
							<span>Next.js</span>
						</motion.span>
						<motion.span
							className={styles.homeSkill}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 1.7, ease: 'easeIn', duration: 0.9 }}>
							<Image
								src={reduxIcon}
								alt='Redux Toolkit icon'
								width={40}
								height={40}
							/>
							<span>Redux Toolkit</span>
						</motion.span> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeInfo
