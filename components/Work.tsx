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
					imageSrc='/images/work/nba-stats-app.jpg'
					altText='NBA Stats App - MERN Stack'
					width={1000}
					height={491}
					gitHubLink='https://github.com/gwilliamboyd/nba-stats-app'
					descriptionBody='Work Description Broh!'
					skillsUsed={[
						<WorkSkill
							key={'react'}
							iconSrc='/images/icons/react-icon.png'
							skill='React'
						/>,
					]}
				/>
				<WorkImage
					imageSrc='/images/work/guithub-desktop-preview.jpg'
					altText='GuitHub Store - Next.js'
					width={1000}
					height={595}
					gitHubLink='https://github.com/gwilliamboyd/guithub-next-site'
					descriptionBody='Work Description Broh!'
					skillsUsed={[
						<WorkSkill
							key={'next.js'}
							iconSrc='/images/icons/next-js-icon.png'
							skill='Next.js'
						/>,
						<WorkSkill
							key={'sanity cdn'}
							iconSrc='/images/icons/next-js-icon.png'
							skill='Sanity CDN'
						/>,
						<WorkSkill
							key={'figma'}
							iconSrc='/images/icons/figma-icon.png'
							skill='Figma'
						/>,
						<WorkSkill
							key={'photoshop'}
							iconSrc='/images/icons/next-js-icon.png'
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
					descriptionBody='Work Description Broh!'
					skillsUsed={[
						<WorkSkill
							key={'react'}
							iconSrc='/images/icons/react-icon.png'
							skill='React'
						/>,
					]}
				/>
			</div>
		</section>
	)
}

export default Work
