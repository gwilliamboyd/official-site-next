import { NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<NextResponse> {
	const { data } = req.body
	try {
		const response = await fetch('/api/contact', {
			method: 'POST',
			body: data,
		})
		return NextResponse.json({ message: 'Opeth rules!' })
	} catch (error: any) {
		return NextResponse.json({ message: 'Internal Server Error' })
	}
}
