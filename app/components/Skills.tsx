import icons from "../data/icons.json"
import SkillCard from "./SkillCard"

const Skills = () => {

	return (
		<section id="skills" className="px-10 pb-8 bg-blue-50">
			<h2 className="pt-6 pb-1">Skills</h2>
			<div className="flex flex-row flex-wrap gap-2">
				{icons.map(icon => (
					<div key={icon.skill}>
						<SkillCard icon={icon}/>
					</div>

				))}
			</div>
		</section>
	)
}

export default Skills