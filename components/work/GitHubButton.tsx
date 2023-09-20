import styles from '@/styles/work.module.css'
type Props = { gitHubLink: string }

const GitHubButton = ({ gitHubLink }: Props) => {
	return (
		<span className={styles.gitHubButton}>
			<a
				href={gitHubLink}
				target='_blank'>
				Source Code
			</a>
		</span>
	)
}

export default GitHubButton
