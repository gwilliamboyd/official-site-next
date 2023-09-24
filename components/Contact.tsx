'use client'
// import dynamic from 'next/dynamic'
// import { revalidatePath } from 'next/cache'
// import { cookies } from 'next/headers'
// import ContactInput from './contact/ContactInput'
/* const ContactInput = dynamic(() => import('./contact/ContactInput'), {
	loading: () => <p>Loading input...</p>,
}) */
// import { submitForm } from '../hooks/submitForm'
// import { POST } from '@/app/api/contact/page'
// import { redirect } from 'next/navigation'
import styles from '@/styles/contact.module.css'
import {
	SupabaseClient,
	createClientComponentClient,
	// createServerActionClient,
	// createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import ContactSubHeading from './contact/ContactSubHeading'

type Props = {}

const Contact = (props: Props) => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string>('')

	// Supabase init
	const supabase: SupabaseClient<any, 'public', any> =
		createClientComponentClient<any, 'public', any>()

	async function submitForm(formData: FormData): Promise<void> {
		const name = formData.get('name')
		const email = formData.get('email')
		const message = formData.get('message')

		// const supabase = createServerComponentClient(/* { cookies } */)
		await supabase.from('formsubmissions').insert({ name, email, message })
		// revalidatePath('/')
		setName('')
		setEmail('')
		setMessage('')
	}

	/*const handleFormSubmit = async () => {
		 await fetch('http://localhost:3000/api/contact', {
			method: 'POST',
			// body: JSON.stringify()
		}) 
	}*/

	return (
		<section
			id='contact'
			className={styles.contactMaster}>
			<span className={styles.contactHeading}>
				<span>Let&apos;s Connect!</span>
				<ContactSubHeading />
			</span>
			<form
				className={styles.contactForm}
				action={submitForm}>
				<div className={styles.contactFormTextInputs}>
					{/* <ContactInput
						name='name'
						type='text'
						heading='Name'
						// submitForm={submitForm}
					/>
					<ContactInput
						name='email'
						type='email'
						heading='Email'
						// submitForm={submitForm}
					/> */}
					{/* Name Input */}
					<div className={styles.contactInputContainer}>
						<span className={styles.contactInputHeading}>Name</span>
						<input
							onChange={e => setName(e.target.value)}
							className={styles.contactInput}
							name={'name'}
							type={'text'}
							placeholder={'Name'}
							value={name}
						/>
					</div>
					{/* Email Input */}
					<div className={styles.contactInputContainer}>
						<span className={styles.contactInputHeading}>Email</span>
						<input
							onChange={e => setEmail(e.target.value)}
							className={styles.contactInput}
							name={'email'}
							type={'email'}
							placeholder={'Email'}
							value={email}
						/>
					</div>
				</div>
				{/* Message Input */}
				<div className={styles.contactTextAreaContainer}>
					<span className={styles.contactTextAreaHeading}>Message</span>
					<textarea
						className={styles.contactTextArea}
						name='message'
						placeholder='Message/Inquiry'
						onChange={e => setMessage(e.target.value)}
						value={message}></textarea>
				</div>
				<button
					className={styles.contactButton}
					type='submit'>
					Send
				</button>
			</form>
		</section>
	)
}

export default Contact
