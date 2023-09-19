import dynamic from 'next/dynamic'
import styles from '../styles/page.module.css'
const HomeInfo = dynamic(() => import('../../components/HomeInfo'), {
	loading: () => <p>Loading...</p>,
})

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeInfo />
		</main>
	)
}
