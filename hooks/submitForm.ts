import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function submitForm(formData: FormData): Promise<void> {
	'use server'
	const name = formData.get('name')
	const email = formData.get('email')
	const message = formData.get('message')

	const supabase = createServerActionClient({ cookies })
	await supabase.from('formsubmissions').insert({ name, email, message })
	revalidatePath('/')
}
