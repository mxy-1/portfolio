import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
	return (
		<section id='about'>
			<div className='flex flex-col items-center text-center'>
				<h1 className="text-6xl font-semibold p-2 bg-gradient-to-r from-slate-600 to-blue-600 text-transparent bg-clip-text">May Hoang</h1>
				<p className="font-semibold p-2">Full stack developer</p>
				<Link href="https://github.com/mxy-1" target="_blank" className="w-max hover:scale-110"><FaGithub size="18px" /></Link>
				{/* <p className="md:w-[660px] inline-block pt-4 text-slate-600">While exploring career options, I was drawn to the skills and qualities of a software developer. I began learning to code with Python and creating games with Pygame. Some of my current skills include React, Javascript and Next.js. As well as this, my background as a pharmacist has provided me with valuable skills such as attention to detail, adaptability and critical thinking, essential in a world of constantly evolving technologies.</p> */}
			</div>
		</section>
	)
}

export default Hero