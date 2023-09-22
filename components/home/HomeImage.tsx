import styles from '@/styles/home.module.css'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

type Props = { imageSrc: StaticImageData }

const HomeImage = ({ imageSrc }: Props) => {
	return (
		<motion.div
			className={styles.homeImage}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ ease: 'easeIn', duration: 0.4 }}>
			<Image
				src={imageSrc}
				alt='G William Boyd - Arms Crossed'
				width={504}
				height={755}
			/>
		</motion.div>
	)
}

export default HomeImage
