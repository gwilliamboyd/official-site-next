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
						sizes='(min-width: 1220px) 1000px, (min-width: 920px) 850px, (min-width: 620px) 600px, 320px'
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
