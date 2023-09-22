import dynamic from 'next/dynamic'
import styles from '@/styles/contact.module.css'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { FormEvent } from 'react'
import ContactSubHeading from './contact/ContactSubHeading'
// import ContactInput from './contact/ContactInput'
const ContactInput = dynamic(() => import('./contact/ContactInput'), {
	loading: () => <p>Loading input...</p>,
})

type Props = {}

const Contact = (props: Props) => {
	async function submitForm(formData: FormData): Promise<void> {
		'use server'
		const name = formData.get('name')
		const email = formData.get('email')
		const message = formData.get('message')
		// const {name, email, message} = formData.get(formData)
		const supabase = createServerActionClient({ cookies })
		await supabase.from('formsubmissions').insert({ name, email, message })
		revalidatePath('/')
	}

	return (
		<section className={styles.contactMaster}>
			<span className={styles.contactHeading}>
				<span>Let&apos;s Connect!</span>
				<ContactSubHeading />
				{/* <span className={styles.contactSubheading}>
					<span>I would love to chat about your next project!</span>
				</span> */}
				{/* <span>Fill out the form below with any inquries!</span> */}
			</span>
			<form
				className={styles.contactForm}
				action={submitForm}>
				<div className={styles.contactFormTextInputs}>
					<ContactInput
						name='name'
						type='text'
						heading='Name'
					/>
					<ContactInput
						name='email'
						type='email'
						heading='Email'
					/>
					{/* <input
							type='text'
							name='name'
						/>
						<input
							type='email'
							name='email'
						/> */}
				</div>
				<div className={styles.contactTextAreaContainer}>
					<span className={styles.contactTextAreaHeading}>Message</span>
					<textarea
						className={styles.contactTextArea}
						name='message'></textarea>
				</div>
				<button
					className={styles.contactButton}
					type='submit'>
					Submit
				</button>
			</form>
		</section>
	)
}

export default Contact
