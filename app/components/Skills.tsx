import icons from "../data/icons.json"

const Skills = () => {

	return (
		<section id="skills" className="px-10">
			<h2 className="pt-6 pb-1">Skills</h2>
			<div className="flex flex-row flex-wrap justify-between">
				{icons.map(icon => (
					<img src={icon.src} key={icon.skill} width={80} className="my-2"/>
				))}
			</div>
		</section>
	)
}

export default Skills