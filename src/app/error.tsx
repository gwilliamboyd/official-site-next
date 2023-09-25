'use client' // Error components must be Client Components
import styles from '@/styles/error.module.css'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
	error,
}: // reset,
{
	error: Error
	// reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className={styles.errorMaster}>
			<div className={styles.errorContainer}>
				<span className={styles.errorHeader}>
					Whoops, something went wrong!
				</span>
				<Link
					href='www.gwilliamboyd.com'
					className={styles.errorBody}>
					Click here to return home!
				</Link>
			</div>
		</div>
	)
}
