import dynamic from 'next/dynamic'
import styles from '@/styles/about.module.css'
import Image from 'next/image'
const AboutSkill = dynamic(() => import('./about/AboutSkill'), {
	loading: () => <p>Z</p>,
})

type Props = {}

const About = (props: Props) => {
	return (
		<section className={styles.aboutMaster}>
			<div className={styles.aboutSkillsContainer}>
				<span className={styles.skillsHeading}>Skills</span>
				<div className={styles.aboutSkills}>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
				</div>
			</div>
			<div className={styles.bioContainer}>
				<span className={styles.bioHeading}>Bio</span>
				<Image
					src={'/images/bio-picture.jpg'}
					alt='G William Boyd - Bio Image'
					width={413}
					height={352}
				/>
				<span className={styles.bioBody}>
					<span>
						I have also worked as a 3D animator and character rigger for video
						games.
					</span>
					<span>
						When I&apos;m not developing, I enjoy spending time with my friends,
						playing the guitar, and cheering on my Dallas Stars!
					</span>
				</span>
			</div>
		</section>
	)
}

export default About
