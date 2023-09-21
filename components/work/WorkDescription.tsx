import styles from '@/styles/work.module.css'

type WorkDescriptionProps = {
	descriptionBody: string
	skillsUsed: React.ReactNode[]
}

const WorkDescription = ({
	descriptionBody,
	skillsUsed,
}: WorkDescriptionProps) => {
	return (
		<div className={styles.workDesc}>
			<span>{descriptionBody}</span>
			<div className={styles.skillsUsed}>
				<span style={{ fontSize: '3rem' }}>Workflow</span>
				<div className={styles.workflowSkills}>
					{skillsUsed?.map((skill: React.ReactNode): React.ReactNode => skill)}
				</div>
			</div>
		</div>
	)
}

export default WorkDescription
