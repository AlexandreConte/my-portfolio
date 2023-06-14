import Area from "@/components/shared/Area"
import Skill, { SkillProps } from "./Skill"

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
    { title: 'Typescript', image: <IconBrandTypescript /> },
    { title: 'TailwindCSS', image: <IconBrandTailwind /> },
  ]

  return skills.map(skill => (
    <Skill key={skill.title} title={skill.title} image={skill.image} />
  ))
}

export default function Skills() {
  return (
    <div id="#skills">
      <Area>
        <h2 className="text-2xl text-center mt-8 py-12">Principais Tecnologias</h2>
        <div className="flex gap-7 flex-wrap justify-evenly py-14">{renderSkills()}</div>
        <p className="text-center text-zinc-500 py-2 font-normal">Clique em uma tecnologia para mostrar sua descrição.</p>
      </Area>
    </div>
  )
}