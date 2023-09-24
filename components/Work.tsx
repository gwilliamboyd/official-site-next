'use client'
import styles from '@/styles/work.module.css'
import { useEffect, useState } from 'react'
import WorkImage from './work/WorkImage'
import WorkSkill from './work/WorkSkill'
import { motion } from 'framer-motion'
import WorkInstructions from './work/WorkInstructions'

type Props = {}

const Work = (props: Props) => {
	const [isMobile, setIsMobile] = useState<boolean>(false)
	// show mobile preview images
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
			id='work'
			className={styles.workMaster}>
			<span className={styles.workHeading}>My Work</span>
			<div className={styles.workContainer}>
				<WorkInstructions />
				{/* <motion.span
					className={styles.workInstructions}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ ease: 'easeOut', duration: 2 }}>
					<i>
						Hover over each image for a description. Click the image to visit
						the example site.
					</i>
				</motion.span> */}
				<WorkImage
					linkHref='https://nba-stats-app-client.onrender.com/'
					imageSrc={
						isMobile
							? '/images/work/nba-preview-mobile.jpg'
							: '/images/work/nba-stats-app.png'
					}
					altText='NBA Stats App - MERN Stack'
					width={0}
					height={0}
					/* width={1000}
					height={595} */
					gitHubLink='https://github.com/gwilliamboyd/nba-stats-app'
					descriptionBody='Full stack (MERN) React app for tracking team and player
					statistics for 2022-23 NBA season.'
					skillsUsed={[
						<WorkSkill
							key={'mern stack'}
							iconSrc='/images/icons/mern-stack-icon.png'
							skill='MERN Stack'
						/>,
						<WorkSkill
							key={'react'}
							iconSrc='/images/icons/react-icon.png'
							skill='React'
						/>,
						<WorkSkill
							key={'redux'}
							iconSrc='/images/icons/redux-icon.png'
							skill='Redux Toolkit'
						/>,
						<WorkSkill
							key={'material ui'}
							iconSrc='/images/icons/mui-icon.png'
							skill='Material UI'
						/>,
						<WorkSkill
							key={'express'}
							iconSrc='/images/icons/express-icon.png'
							skill='Express'
						/>,
						<WorkSkill
							key={'figma'}
							iconSrc='/images/icons/figma-icon.png'
							skill='Figma'
						/>,
					]}
				/>
				<WorkImage
					linkHref='https://guithub.netlify.app/'
					imageSrc={
						isMobile
							? '/images/work/guithub-preview-mobile.png'
							: '/images/work/guithub-desktop-preview.jpg'
					}
					altText='GuitHub Store - Next.js'
					width={0}
					height={0}
					gitHubLink='https://github.com/gwilliamboyd/guithub-next-site'
					descriptionBody='Online store for hypothetical guitar retailer using the Sanity content management system.'
					skillsUsed={[
						<WorkSkill
							key={'next.js'}
							iconSrc='/images/icons/next-js-icon.png'
							skill='Next.js'
						/>,
						<WorkSkill
							key={'sanity cdn'}
							iconSrc='/images/icons/sanity-logo-white.png'
							skill='Sanity CDN'
						/>,
						<WorkSkill
							key={'figma'}
							iconSrc='/images/icons/figma-icon.png'
							skill='Figma'
						/>,
						<WorkSkill
							key={'photoshop'}
							iconSrc='/images/icons/ps-icon.png'
							skill='Photoshop'
						/>,
					]}
				/>
				<WorkImage
					linkHref='https://gwilliamboyd.github.io/hogwarts-student-portal/'
					imageSrc={
						isMobile
							? '/images/work/hogwarts-student-portal-mobile.png'
							: '/images/work/hogwarts-student-portal.jpg'
					}
					altText='Hogwarts Student Portal - React SPA'
					width={0}
					height={0}
					gitHubLink='https://github.com/gwilliamboyd/hogwarts-student-portal'
					descriptionBody='React site utilizing data from a public Harry Potter API.'
					skillsUsed={[
						<WorkSkill
							key={'react'}
							iconSrc='/images/icons/react-icon.png'
							skill='React'
						/>,
						<WorkSkill
							key={'figma'}
							iconSrc='/images/icons/figma-icon.png'
							skill='Figma'
						/>,
						<WorkSkill
							key={'photoshop'}
							iconSrc='/images/icons/ps-icon.png'
							skill='Photoshop'
						/>,
						<WorkSkill
							key={'framer motion'}
							iconSrc='/images/icons/framer-motion-icon-white.png'
							skill='Framer Motion'
						/>,
					]}
				/>
			</div>
		</section>
	)
}

export default Work
