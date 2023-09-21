import styles from '@/styles/work.module.css'
import Image from 'next/image'

type Props = { iconSrc: string; skill: string }

const WorkSkill = ({ iconSrc, skill }: Props) => {
	return (
		<div className={styles.skill}>
			<Image
				src={iconSrc}
				alt={skill}
				width={60}
				height={60}
			/>
			<span>{skill}</span>
		</div>
	)
}

export default WorkSkill
