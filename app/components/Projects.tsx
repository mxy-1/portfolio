import projects from "../data/projects.json"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="my-2">Projects</h2>
			<div className="flex flex-wrap flex-row gap-6">
				{
					projects.map(project => (
						<div key={project.title} className="max-w-80 p-3 border-solid border-2 border-blue-300 ">
							<h3>{project.title}</h3>
							<Image src={project.imageSrc} width={500}
								height={500} alt={`Image of ${project.imageSrc}`} className="my-2"/>
							<Link href={project.demo} target="_blank" className="border-solid border-2 border-blue-300 p-1 text-base">View<MdOutlinePageview size="26px" className="inline ml-1 my-2"/></Link>
							<Link href={project.source}  target="_blank" className="border-solid border-2 border-blue-300 p-1 text-base ml-2">Github<FaGithub size="18px" className="inline ml-1"/></Link>
							<p>{project.description}</p>
							<ul>
								{project.skills.map(skill => (
									<li className="border-solid border-2 border-sky-950 w-fit inline-block mr-1 mt-1 px-1 text-xs" key={skill}>{skill}</li>
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