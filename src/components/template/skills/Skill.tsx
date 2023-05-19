import SkillContext from "@/components/data/contexts/SkillContext"
import Image from "next/image"
import { useContext } from "react"

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
        <Image
          height={60}
          src={props.image}
          alt={props.title}
        />
        <div className="flex justify-center">{props.title}</div>
      </div>
    </div>
  )
}