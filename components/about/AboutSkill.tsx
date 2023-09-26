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
				sizes='(min-width: 1540px) 120px, (min-width: 1220px) 110px, (min-width: 620px) 100px, 70px'
			/>
			{/* skill title */}
			<span>{skillTitle}</span>
		</div>
	)
}

export default AboutSkill
