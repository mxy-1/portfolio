"use client"
import { useState } from "react"

const SkillCard = ({icon}: {icon:any}) => {
    const [skill, setSkill] = useState(false)

    const handleMouseEnter = () => {
        setSkill(true)
    }

    const handleMouseLeave = () => {
        setSkill(false)
    }

    return (
        <div>
            <img src={icon.src} width={80} className="my-2 hover:opacity-60" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            <div className="relative">
                <p className={skill ? "flex justify-center absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium" : "hidden"}>{icon.skill}</p>
            </div>
        </div>

    )
}

export default SkillCard