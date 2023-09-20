import styles from '@/styles/work.module.css'
import WorkImage from './work/WorkImage'

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
				/>
				<WorkImage
					imageSrc='/images/work/guithub-desktop-preview.jpg'
					altText='GuitHub Store - Next.js'
					width={1000}
					height={595}
					gitHubLink='https://github.com/gwilliamboyd/guithub-next-site'
				/>
			</div>
		</section>
	)
}

export default Work
