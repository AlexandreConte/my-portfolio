import Area from "@/components/shared/Area"
import Skill, { SkillProps } from "./Skill"
import Title from "../hello/Title"

// Images
import reactjs from '../../../../public/skills/reactjs.svg'
import nextjs from '../../../../public/skills/nextjs.svg'
import tailwind from '../../../../public/skills/tailwind.svg'
import typescript from '../../../../public/skills/typescript.svg'

function renderSkills() {
  const skills: Omit<SkillProps, 'description'>[] = [
    { title: 'ReactJs', image: reactjs },
    { title: 'NextJs', image: nextjs },
    { title: 'TailwindCSS', image: tailwind },
    { title: 'Typescript', image: typescript },
  ]

  return skills.map(skill => (
    <Skill key={skill.title} title={skill.title} image={skill.image} />
  ))
}

export default function Skills() {
  return (
    <Area>
      <Title className="text-2xl text-center py-5">My Core Skills</Title>
      <div className="flex gap-7 flex-wrap justify-evenly py-14">{renderSkills()}</div>
      <p className="text-center text-zinc-600">Click on a skill to show an expanded description.</p>
    </Area>
  )
}