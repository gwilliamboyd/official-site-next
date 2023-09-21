'use client'
import styles from '@/styles/work.module.css'
import Image from 'next/image'
import GitHubButton from './GitHubButton'
import WorkDescription from './WorkDescription'

type WorkImageProps = {
	imageSrc: string
	altText: string
	width: number
	height: number
	gitHubLink: string
	descriptionBody: string
	skillsUsed: React.ReactNode[]
}

const WorkImage = ({
	imageSrc,
	altText,
	width,
	height,
	gitHubLink,
	descriptionBody,
	skillsUsed,
}: WorkImageProps) => {
	return (
		<section className={styles.workImageContainer}>
			<div className={styles.workItem}>
				{/* description */}
				<WorkDescription
					descriptionBody={descriptionBody}
					skillsUsed={skillsUsed}
				/>
				{/* image */}
				<Image
					className={styles.workImage}
					onMouseEnter={() => console.log('work image hover')}
					src={imageSrc}
					alt={altText}
					width={width}
					height={height}
				/>
			</div>
			<GitHubButton gitHubLink={gitHubLink} />
		</section>
	)
}

export default WorkImage
