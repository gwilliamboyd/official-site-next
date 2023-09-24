'use client'
import styles from '@/styles/work.module.css'
import { motion } from 'framer-motion'

type Props = { isTablet: boolean }

const WorkInstructions = ({ isTablet }: Props) => {
	return (
		<motion.span
			className={styles.workInstructions}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay: 0.5, ease: 'easeOut', duration: 2 }}>
			{isTablet ? (
				<i>Click the image to visit the example site.</i>
			) : (
				<i>
					Hover over each image for a description. Click the image to visit the
					example site.
				</i>
			)}
		</motion.span>
	)
}

export default WorkInstructions
