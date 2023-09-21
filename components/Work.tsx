import styles from '@/styles/work.module.css'
import WorkImage from './work/WorkImage'
import WorkSkill from './work/WorkSkill'

type Props = {}

const Work = (props: Props) => {
	return (
		<section className={styles.workMaster}>
			<span className={styles.workHeading}>My Work</span>
			<div className={styles.workContainer}>
				<WorkImage
					imageSrc='/images/work/nba-stats-app.png'
					altText='NBA Stats App - MERN Stack'
					width={1000}
					height={595}
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
					imageSrc='/images/work/guithub-desktop-preview.jpg'
					altText='GuitHub Store - Next.js'
					width={1000}
					height={595}
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
					imageSrc='/images/work/hogwarts-student-portal.jpg'
					altText='Hogwarts Student Portal - React SPA'
					width={1000}
					height={567}
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
