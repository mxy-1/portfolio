import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
	return (
		<section id='about'>
			<div className='flex flex-col items-center text-center'>
				<h1 className="text-4xl sm:text-6xl font-semibold p-2 bg-gradient-to-r from-slate-600 to-blue-600 text-transparent bg-clip-text">May Hoang</h1>
				<p className="font-semibold sm:p-2">Full stack developer</p>
				<Link href="https://github.com/mxy-1" target="_blank" className="w-max hover:scale-110"><FaGithub size="18px" /></Link>
			</div>
			{/* <div className="bg-white mb-10 m-4 rounded-md shadow-md md:w-max p-4">
				<Image src="/brick.png" alt="brick breaker game" width={400} height={400} />
				<p className="md:w-[660px] inline-block text-slate-700">While exploring career options, I was drawn to the skills and qualities of a software developer. I began learning to code with Python and creating games with Pygame. Some of my current skills include React, Javascript and Next.js. As well as this, my background as a pharmacist has provided me with valuable skills such as attention to detail, adaptability and critical thinking, essential in a world of constantly evolving technologies.</p>
			</div> */}
		</section>
	)
}

export default Hero