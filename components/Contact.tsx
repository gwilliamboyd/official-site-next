'use client'
import styles from '@/styles/contact.module.css'
import {
	SupabaseClient,
	createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import ContactSubHeading from './contact/ContactSubHeading'
// toast notifications
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {}

const Contact = (props: Props) => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

	// Supabase init
	/* 	
	using client component to allow Contact.tsx
	to be a client component for useState while still
	being able to post to database 
	*/
	const supabase: SupabaseClient<any, 'public', any> =
		createClientComponentClient<any, 'public', any>()

	async function submitForm(formData: FormData): Promise<void> {
		const name = formData.get('name')
		const email = formData.get('email')
		const message = formData.get('message')

		await supabase.from('formsubmissions').insert({ name, email, message })

		setName('')
		setEmail('')
		setMessage('')
		toastNotif()
	}

	const toastNotif = () =>
		toast.success(
			"Thanks for reaching out! I'll get back with you very soon!",
			{
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: 'dark',
			}
		)

	return (
		<section
			id='contact'
			className={styles.contactMaster}>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
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
