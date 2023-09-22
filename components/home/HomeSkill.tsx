'use client'
import styles from '@/styles/home.module.css'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

type Props = { delayTime: number; iconSrc: StaticImageData; skillTitle: string }

const HomeSkill = ({ delayTime, iconSrc, skillTitle }: Props) => {
	return (
		<motion.span
			className={styles.homeSkill}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay: delayTime, ease: 'easeIn', duration: 0.9 }}>
			<Image
				src={iconSrc}
				alt='MERN stack icon'
				width={40}
				height={40}
			/>
			<span>{skillTitle}</span>
		</motion.span>
	)
}

export default HomeSkill
