import styles from '@/styles/contact.module.css'

type Props = { name: string; type: string; heading: string }

const ContactInput = ({ name, type, heading }: Props) => {
	return (
		<div className={styles.contactInputContainer}>
			<span className={styles.contactInputHeading}>{heading}</span>
			<input
				className={styles.contactInput}
				name={name}
				type={type}
				placeholder={heading}
			/>
		</div>
	)
}

export default ContactInput
