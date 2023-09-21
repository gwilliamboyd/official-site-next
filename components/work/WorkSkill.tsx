import styles from '@/styles/work.module.css'
import Image from 'next/image'

type Props = { iconSrc: string; skill: string }

const WorkSkill = ({ iconSrc, skill }: Props) => {
	return (
		<div className={styles.skill}>
			<Image
				src={iconSrc}
				alt={skill}
				width={64}
				height={64}
			/>
			<span className={styles.skillTitle}>{skill}</span>
		</div>
	)
}

export default WorkSkill
