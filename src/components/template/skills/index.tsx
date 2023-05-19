import Area from "@/components/shared/Area"
import Skill, { SkillProps } from "./Skill"
import Title from "../../shared/Title"

// Images
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript
} from "@tabler/icons-react"

function renderSkills() {
  const skills: Omit<SkillProps, 'description'>[] = [
    { title: 'ReactJs', image: <IconBrandReact /> },
    { title: 'NextJs', image: <IconBrandNextjs /> },
    { title: 'TailwindCSS', image: <IconBrandTailwind /> },
    { title: 'Typescript', image: <IconBrandTypescript /> },
  ]

  return skills.map(skill => (
    <Skill key={skill.title} title={skill.title} image={skill.image} />
  ))
}

export default function Skills() {
  return (
    <div id="#skills">
      <Area>
        <Title className="text-2xl text-center pt-12 pb-5">My Core Skills</Title>
        <div className="flex gap-7 flex-wrap justify-evenly py-14">{renderSkills()}</div>
        <p className="text-center text-zinc-600 py-2">Click on a skill to show an expanded description.</p>
      </Area>
    </div>
  )
}