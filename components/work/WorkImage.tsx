import styles from '@/styles/work.module.css'
import Image from 'next/image'
import GitHubButton from './GitHubButton'

type WorkImageProps = {
	imageSrc: string
	altText: string
	width: number
	height: number
	gitHubLink: string
}

const WorkImage = ({
	imageSrc,
	altText,
	width,
	height,
	gitHubLink,
}: WorkImageProps) => {
	return (
		<section className={styles.workItem}>
			<Image
				src={imageSrc}
				alt={altText}
				width={width}
				height={height}
			/>
			<GitHubButton gitHubLink={gitHubLink} />
		</section>
	)
}

export default WorkImage
