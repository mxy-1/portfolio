import projects from "../data/projects.json"
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-2xl font-bold">Projects</h2>
			<div>
				{
					projects.map(project => (
						<div key={project.title} className="border-solid border-2 border-emerald-200">
							<h3 className="font-bold">{project.title}</h3>
							<Image src={project.imageSrc} width={500}
								height={500} alt={`Image of ${project.imageSrc}`} />
							<ul>
								{project.skills.map(skill => (
									<li key={skill}>{skill}</li>
								))}
							</ul>
							<p>{project.description}</p>
							<Link href={project.demo}>Demo</Link>
							<Link href={project.source}>Github</Link>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Projects