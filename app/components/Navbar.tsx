import Link from 'next/link'

const Navbar = () => {
	return (
		<nav>
			<ul className='display: flex justify-start border-b-[1px] border-blue-50'>
				<li><Link href="#about" className='px-2 hover:text-slate-600'>About</Link></li>
				<li><Link href="#skills" className='px-2 hover:text-slate-600'>Skills</Link></li>
				<li><Link href="#projects" className='pl-2 hover:text-slate-600'>Projects</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar