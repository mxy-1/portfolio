"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const SkillCard = ({ icon }: { icon: { skill: string, src: string } }) => {
    const [skill, setSkill] = useState(false)

    const handleMouseEnter = () => {
        setSkill(true)
    }

    const handleMouseLeave = () => {
        setSkill(false)
    }

    return (
        <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        >
            <img src={icon.src} width={80} className="my-2 hover:opacity-60" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <div className="relative">
                <p className={skill ? "flex justify-center absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium" : "hidden"}>{icon.skill}</p>
            </div>
        </motion.div>

    )
}

export default SkillCard