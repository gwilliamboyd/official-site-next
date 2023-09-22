'use client'
import styles from '@/styles/home.module.css'
import { motion } from 'framer-motion'

type Props = {}

const HomeHeading = (props: Props) => {
	return (
		<>
			<motion.span
				className={styles.homeName}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ ease: 'easeIn', duration: 0.7 }}>
				G William Boyd
			</motion.span>
			<motion.span
				className={styles.homeSubtitle}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5, ease: 'easeIn', duration: 0.9 }}>
				Full-Stack Web Developer
			</motion.span>
		</>
	)
}

export default HomeHeading
