import dynamic from 'next/dynamic'
import styles from '@/styles/about.module.css'
import Image from 'next/image'
// import AboutSkill from './about/AboutSkill'
const AboutSkill = dynamic(() => import('./about/AboutSkill'), {
	loading: () => <p>Z</p>,
})

type Props = {}

const About = (props: Props) => {
	return (
		<section
			id='about'
			className={styles.aboutMaster}>
			<div className={styles.aboutSkillsContainer}>
				<span className={styles.skillsHeading}>Skills</span>
				<div className={styles.aboutSkills}>
					<AboutSkill
						iconSrc='/images/icons/mern-stack-icon.png'
						skillTitle='MERN Stack'
					/>
					<AboutSkill
						iconSrc='/images/icons/react-icon.png'
						skillTitle='React'
					/>
					<AboutSkill
						iconSrc='/images/icons/next-js-icon.png'
						skillTitle='Next.js'
					/>
					<AboutSkill
						iconSrc='/images/icons/node-icon.png'
						skillTitle='Node.js'
					/>
					<AboutSkill
						iconSrc='/images/icons/express-icon.png'
						skillTitle='Express'
					/>
					<AboutSkill
						iconSrc='/images/icons/redux-icon.png'
						skillTitle='Redux Toolkit'
					/>
					<AboutSkill
						iconSrc='/images/icons/js-icon.png'
						skillTitle='Javscript'
					/>
					<AboutSkill
						iconSrc='/images/icons/mui-icon.png'
						skillTitle='Material UI'
					/>
					<AboutSkill
						iconSrc='/images/icons/figma-icon.png'
						skillTitle='Figma'
					/>
				</div>
			</div>
			<div className={styles.bioContainer}>
				<span className={styles.bioHeading}>Bio</span>
				<Image
					className={styles.bioImage}
					src={'/images/bio-picture.jpg'}
					alt='G William Boyd - Bio Image'
					width={0}
					height={0}
					sizes='(min-width: 1300px) 413px, (min-width: 920px) calc(29.44vw + 36px), 80vw'
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
