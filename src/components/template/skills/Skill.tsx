import SkillContext from "@/components/data/contexts/SkillContext"
import React, { useContext } from "react"

export interface SkillProps {
  title: string
  image: any
}

export default function Skill(props: SkillProps) {

  const { setSelectedSkill } = useContext(SkillContext)

  return (
    <div className="flex flex-col items-center hover:scale-110 transition-transform justify-center flex-wrap"
      onClick={() => setSelectedSkill(props)}
    >
      <div className="flex flex-col items-center gap-4 cursor-pointer">
        {props.image ? (
          React.cloneElement(props.image, {
            size: 60,
          })
        ) : null}
        <h2 className="flex justify-center items-center font-bold text-lg">{props.title}</h2>
      </div>
    </div>
  )
}