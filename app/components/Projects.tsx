import projects from "../data/projects.json"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="my-2">Projects</h2>
			<div className="flex flex-wrap flex-row gap-8">
				{
					projects.map(project => (
						<div key={project.title} className="max-w-80 p-3 bg-slate-50">
							<h3>{project.title}</h3>
							<Image src={project.imageSrc} width={500}
								height={500} alt={`Image of ${project.imageSrc}`} className="my-2"/>

							<p className="py-1">{project.description}</p>
							<ul>
								{project.skills.map(skill => (
									<li className="font-medium bg-blue-300 w-fit rounded-md inline-block mr-2 mt-1 px-1 text-xs" key={skill}>{skill}</li>
								))}
							</ul>
							<Link href={project.demo} target="_blank" className="border-solid border-2 border-blue-300  p-1 text-base rounded-md bg-blue-100 hover:bg-blue-300 font-medium">View<MdOutlinePageview size="26px" className="inline ml-1 my-2"/></Link>
							<Link href={project.source}  target="_blank" className="border-solid border-2 border-blue-300 p-1 text-base ml-2 rounded-md bg-blue-100  hover:bg-blue-300 font-medium">Github<FaGithub size="18px" className="inline ml-1"/></Link>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Projects