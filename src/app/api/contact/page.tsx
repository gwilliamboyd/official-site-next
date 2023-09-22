/* import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function submit(): Promise<JSX.Element> {
	const supabase = createServerComponentClient({ cookies })

	const { data: formsubmissions } = await supabase
		.from('formsubmissions')
		.select()
	return (
		<ul>
			{formsubmissions?.map(subs => (
				<>
					<li
						key={subs.id}
						style={{ color: 'black' }}>
						{subs.name}
					</li>
					<li
						key={subs.id}
						style={{ color: 'black' }}>
						{subs.email}
					</li>
					<li
						key={subs.id}
						style={{ color: 'black' }}>
						{subs.message}
					</li>
				</>
			))}
		</ul>
	)
} */
