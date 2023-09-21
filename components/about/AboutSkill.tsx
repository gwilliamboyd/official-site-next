import styles from '@/styles/about.module.css'
import Image from 'next/image'

type Props = { iconSrc: string; skillTitle: string }

const AboutSkill = ({ iconSrc, skillTitle }: Props) => {
	return (
		<div className={styles.aboutSkillIndiv}>
			{/* icon */}
			<Image
				src={iconSrc}
				alt={skillTitle}
				width={120}
				height={120}
			/>
			{/* skill title */}
			<span>{skillTitle}</span>
		</div>
	)
}

export default AboutSkill
