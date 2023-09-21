import dynamic from 'next/dynamic'
import styles from '../styles/page.module.css'
// import Work from '../../components/Work'
// import About from '../../components/About'
const HomeInfo = dynamic(() => import('../../components/HomeInfo'), {
	loading: () => <p>Loading...</p>,
})
const Work = dynamic(() => import('../../components/Work'), {
	loading: () => <p>Loading Work...</p>,
})
const About = dynamic(() => import('../../components/About'), {
	loading: () => <p>Loading About...</p>,
})

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeInfo />
			<Work />
			<About />
		</main>
	)
}
