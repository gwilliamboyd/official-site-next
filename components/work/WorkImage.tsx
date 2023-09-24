'use client'
import styles from '@/styles/work.module.css'
import Image from 'next/image'
import GitHubButton from './GitHubButton'
import WorkDescription from './WorkDescription'
import { SetStateAction } from 'react'

type WorkImageProps = {
	linkHref: string
	imageSrc: string
	altText: string
	width: number
	height: number
	gitHubLink: string
	descriptionBody: string
	skillsUsed: React.ReactNode[]
	isTablet: boolean
}

const WorkImage = ({
	linkHref,
	imageSrc,
	altText,
	width,
	height,
	gitHubLink,
	descriptionBody,
	skillsUsed,
	isTablet,
}: WorkImageProps) => {
	return (
		<section className={styles.workImageContainer}>
			<div className={styles.workItem}>
				{/* description */}
				<a
					href={linkHref}
					target='_blank'>
					<WorkDescription
						descriptionBody={descriptionBody}
						skillsUsed={skillsUsed}
					/>

					{/* image */}
					<Image
						className={styles.workImage}
						src={imageSrc}
						alt={altText}
						width={width}
						height={height}
						sizes='100vw'
					/>
				</a>
			</div>
			{isTablet && (
				<span className={styles.workDescMobile}>{descriptionBody}</span>
			)}
			<GitHubButton gitHubLink={gitHubLink} />
		</section>
	)
}

export default WorkImage
