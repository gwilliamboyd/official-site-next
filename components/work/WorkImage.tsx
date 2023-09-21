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
		<>
			<section className={styles.workItem}>
				{/* description */}
				<WorkDescription>
					<span>{descriptionBody}</span>
					<div className={styles.skillsUsed}>
						<span>Workflow</span>
						<div className={styles.workflowSkills}>
							{skillsUsed.map(
								(skill: React.ReactNode): React.ReactNode => skill
							)}
						</div>
					</div>
				</WorkDescription>
				{/* image */}
				<Image
					className={styles.workImage}
					onMouseEnter={() => console.log('work image hover')}
					src={imageSrc}
					alt={altText}
					width={width}
					height={height}
				/>
			</section>
			<GitHubButton gitHubLink={gitHubLink} />
		</>
	)
}

export default WorkImage
