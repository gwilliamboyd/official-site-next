import styles from '@/styles/footer.module.css'
import Image from 'next/image'

type Props = { iconSrc: string; skillName: string; dimensions: number }

const FooterSkill = ({ iconSrc, skillName, dimensions }: Props) => {
	return (
		<section className={styles.footerSkill}>
			<Image
				src={iconSrc}
				alt={skillName}
				width={dimensions}
				height={dimensions}
			/>
			<span>{skillName}</span>
		</section>
	)
}

export default FooterSkill
