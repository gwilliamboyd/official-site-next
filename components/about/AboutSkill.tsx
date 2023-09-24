import styles from '@/styles/about.module.css'
import Image from 'next/image'

type Props = { iconSrc: string; skillTitle: string }

const AboutSkill = ({ iconSrc, skillTitle }: Props) => {
	return (
		<div className={styles.aboutSkillIndiv}>
			{/* icon */}
			<Image
				className={styles.aboutSkillImage}
				src={iconSrc}
				alt={skillTitle}
				width={0}
				height={0}
				sizes='100vw'
			/>
			{/* skill title */}
			<span>{skillTitle}</span>
		</div>
	)
}

export default AboutSkill
