import styles from '@/styles/home.module.css'
import Image from 'next/image'
import crossArmsTall from '../public/images/cross-arms-tall.jpg'
// icons
import mernIcon from '../public/images/icons/mern-stack-icon.png'
import reactIcon from '../public/images/icons/react-icon.png'
import nextJsIcon from '../public/images/icons/next-js-icon.png'
import reduxIcon from '../public/images/icons/redux-icon.png'

type Props = {}

const HomeInfo = (props: Props) => {
	return (
		<section className={styles.homeMaster}>
			<div className={styles.homeContainer}>
				<Image
					className={styles.homeImage}
					src={crossArmsTall}
					alt='G William Boyd - Arms Crossed'
					width={505}
					height={756}
				/>
				<div className={styles.homeText}>
					<div className={styles.homeHeader}>
						<span className={styles.homeName}>G William Boyd</span>
						<span className={styles.homeSubtitle}>
							Full-stack Web Developer
						</span>
					</div>
					<div className={styles.homeSkills}>
						<span className={styles.homeSkill}>
							<Image
								src={mernIcon}
								alt='MERN stack icon'
								width={40}
								height={40}
							/>
							<span>MERN Stack</span>
						</span>
						<span className={styles.homeSkill}>
							<Image
								src={reactIcon}
								alt='React icon'
								width={40}
								height={40}
							/>
							<span>React</span>
						</span>
						<span className={styles.homeSkill}>
							<Image
								src={nextJsIcon}
								alt='Next.js icon'
								width={40}
								height={40}
							/>
							<span>Next.js</span>
						</span>
						<span className={styles.homeSkill}>
							<Image
								src={reduxIcon}
								alt='Redux Toolkit icon'
								width={40}
								height={40}
							/>
							<span>Redux Toolkit</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeInfo
