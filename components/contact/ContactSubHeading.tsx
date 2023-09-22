'use client'
import styles from '@/styles/contact.module.css'
import { motion } from 'framer-motion'

type Props = {}

const ContactSubHeading = (props: Props) => {
	return (
		<motion.span
			className={styles.contactSubheading}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ ease: 'easeOut', duration: 2 }}>
			<span>I would love to chat about your next project!</span>
			<span>
				Fill out the form below with any inquries, and I&apos;d be happy to
				help!
			</span>
		</motion.span>
	)
}

export default ContactSubHeading
