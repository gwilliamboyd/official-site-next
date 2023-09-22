'use client'
import styles from '@/styles/work.module.css'
import { motion } from 'framer-motion'

type Props = {}

const WorkInstructions = (props: Props) => {
	return (
		<motion.span
			className={styles.workInstructions}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ ease: 'easeOut', duration: 2 }}>
			<i>
				Hover over each image for a description. Click the image to visit the
				example site.
			</i>
		</motion.span>
	)
}

export default WorkInstructions
