import styles from '@/styles/work.module.css'

type Props = {
	gitHubLink: string
}

const GitHubButton = ({ gitHubLink }: Props) => {
	return (
		<a
			className={styles.gitHubButton}
			href={gitHubLink}
			target='_blank'>
			Source Code
		</a>
	)
}

export default GitHubButton
