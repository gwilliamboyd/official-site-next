'use client'
import styles from '@/styles/contact.module.css'
import { FormEvent } from 'react'

type Props = {}

const Contact = (props: Props) => {
	async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		try {
			const response: Response = await fetch('/api/contact', {
				method: 'POST',
				body: formData,
			})
			if (!response.ok) {
				throw new Error(`Invalid response: ${response.status}`)
			}
		} catch (err: any) {
			console.error(err.message)
		}
	}

	return (
		<section className={styles.contactMaster}>
			<span className={styles.contactHeading}>Let&apos;s Connect!</span>
			<span className={styles.contactSubheading}>
				<span>I would love to chat about your next project!</span>
				<span>Fill out the form below with any inquries!</span>
				<form
					onSubmit={onSubmit}
					action=''
					method='post'>
					<input
						type='text'
						name='name'
					/>
					<button type='submit'>Submit</button>
				</form>
			</span>
		</section>
	)
}

export default Contact
