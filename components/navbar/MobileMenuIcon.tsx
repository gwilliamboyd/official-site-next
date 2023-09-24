type Props = { dimensions: number }

const MobileMenuIcon = ({ dimensions }: Props) => {
	return (
		<svg
			className='svgIcon'
			width={dimensions}
			height={dimensions}
			viewBox='0 0 1920 1920'
			xmlns='http://www.w3.org/2000/svg'>
			<g
				id='SVGRepo_bgCarrier'
				stroke-width='0'
			/>

			<g
				id='SVGRepo_tracerCarrier'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>

			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z'
					fill-rule='evenodd'
				/>{' '}
			</g>
		</svg>
	)
}

export default MobileMenuIcon
