import styles from '@/styles/work.module.css'

type Props = { children: React.ReactNode }

const WorkDescription = ({ children }: Props) => {
	return <div className={styles.workDesc}>{children}</div>
}

export default WorkDescription
