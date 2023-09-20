import styles from '@/styles/work.module.css'
import WorkImage from './work/WorkImage'

type Props = {}

const Work = (props: Props) => {
	return (
		<section className={styles.workMaster}>
			<div className={styles.workContainer}>
				<WorkImage
					imageSrc='/images/work/nba-stats-app.jpg'
					altText='NBA Stats App - MERN Stack'
					width={1000}
					height={491}
					gitHubLink='https://github.com/gwilliamboyd/nba-stats-app'
				/>
			</div>
		</section>
	)
}

export default Work
