import dynamic from 'next/dynamic'
import styles from '../styles/page.module.css'
const HomeInfo = dynamic(() => import('../../components/HomeInfo'), {
	loading: () => <p>Loading...</p>,
})
const Work = dynamic(() => import('../../components/Work'), {
	loading: () => <p>Loading Work...</p>,
})
const About = dynamic(() => import('../../components/About'), {
	loading: () => <p>Loading About...</p>,
})
const Contact = dynamic(() => import('../../components/Contact'), {
	loading: () => <p>Loading Contact...</p>,
})
const Footer = dynamic(() => import('../../components/Footer'), {
	loading: () => <p>Loading Footer...</p>,
})

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeInfo />
			<Work />
			<About />
			<Contact />
			<Footer />
		</main>
	)
}
