type ContainerProps = { children: React.ReactNode }

const Container = ({ children }: ContainerProps) => {
	return <section className='global'>{children}</section>
}

export default Container
