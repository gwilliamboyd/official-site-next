// 'use client'
import styles from '@/styles/contact.module.css'
// import { useEffect, useState } from 'react'
// import { redirect, useRouter } from 'next/navigation'

type Props = {
	name: string
	type: string
	heading: string
}

const ContactInput = ({ name, type, heading }: Props) => {
	/* const router = useRouter()
	const [value, setValue] = useState<string>('')
	useEffect(() => {
		setValue('')
	}, []) */
	return (
		<div className={styles.contactInputContainer}>
			<span className={styles.contactInputHeading}>{heading}</span>
			<input
				required
				className={styles.contactInput}
				name={name}
				type={type}
				placeholder={heading}
			/>
		</div>
	)
}

export default ContactInput
