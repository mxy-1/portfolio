import projects from "../data/projects.json"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";
// flex-grow: 1;
//     max-width: 46%;
// 0px 0px 6px 2px rgb(106 131 146 / 17%)
const Projects = () => {
	return (
		<section id="projects" className="px-10">
			<h2 className="my-2">Projects</h2>
			<div className="flex flex-wrap flex-row justify-between">
				{
					projects.map(project => (
						<div key={project.title} className="md:grow md:max-w-[48%] w-full p-3 bg-slate-50 mb-10">
							
							<Image src={project.imageSrc} width={600}
								height={500} alt={`Image of ${project.imageSrc}`} className="mb-2"/>
							<Link href={project.demo} target="_blank" className="border-solid border-2 border-blue-300  p-1 text-base rounded-md bg-blue-100 hover:bg-blue-300 font-medium">View<MdOutlinePageview size="26px" className="inline ml-1 my-2"/></Link>
							<Link href={project.source}  target="_blank" className="border-solid border-2 border-blue-300 p-1 text-base ml-2 rounded-md bg-blue-100  hover:bg-blue-300 font-medium">Github<FaGithub size="18px" className="inline ml-1"/></Link>
							<h3>{project.title}</h3>
							<p className="py-1">{project.description}</p>
							<ul>
								{project.skills.map(skill => (
									<li className="font-medium bg-blue-300 w-fit rounded-md inline-block mr-2 mt-1 px-1 text-xs" key={skill}>{skill}</li>
								))}
							</ul>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Projects