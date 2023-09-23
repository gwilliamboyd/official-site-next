import styles from '@/styles/footer.module.css'
import FooterSkill from './footer/FooterSkill'

type Props = {}

const Footer = (props: Props) => {
	return (
		<section className={styles.footerMaster}>
			<div className={styles.footerContainer}>
				<span className={styles.footerHeading}>
					Site developed by G William Boyd
				</span>
				<span className={styles.footerSkillList}>
					Powered by:
					<FooterSkill
						iconSrc='/images/icons/next-js-icon-blue.png'
						skillName='Next.js'
						dimensions={36}
					/>
					<FooterSkill
						iconSrc='/images/icons/supabase-icon-blue.png'
						skillName='Supabase'
						dimensions={28}
					/>
					<FooterSkill
						iconSrc='/images/icons/typescript-icon-blue.png'
						skillName='Typescript'
						dimensions={28}
					/>
					{/* <span style={{ color: 'var(--light-blue)' }}>and</span> */}
					<FooterSkill
						iconSrc='/images/icons/framer-motion-icon-blue.png'
						skillName='Framer Motion'
						dimensions={32}
					/>
				</span>
			</div>
		</section>
	)
}

export default Footer
