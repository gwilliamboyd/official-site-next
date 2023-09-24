/* import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export default async function POST(formData: FormData): Promise<void> {
	/* const { data: formsubmissions } = await supabase
	.from('formsubmissions')
	.select()
	const name = formData.get('name')
	const email = formData.get('email')
	const message = formData.get('message')

	const supabase = createServerComponentClient({ cookies })
	await supabase.from('formsubmissions').insert({ name, email, message })
	revalidatePath('/')
}
 */

/* import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function submitContactForm(formData: FormData) {
	'use server'
	const name = formData.get('name')
	const email = formData.get('email')
	const message = formData.get('message')
	const res = await fetch('https://lxxwvhmbjurnhsrfjipc.supabase.co', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'API-Key':
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4eHd2aG1ianVybmhzcmZqaXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0MDMxMjAsImV4cCI6MjAxMDk3OTEyMH0.ESUJfPd1_vOdByCLGEBQlxCqhuoOajS4v06WZNE_Or8',
		},
		body: JSON.stringify({ name, email, message }),
	})

	const data = await res.json()
	const supabase = createServerComponentClient({ cookies })
	await supabase.from('formsubmissions').insert({ name, email, message })
	revalidatePath('/')

	return NextResponse.json(data)
} */
