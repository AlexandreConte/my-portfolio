import Area from "@/components/shared/Area"
import Project, { ProjectProps } from "./Project"

// Icons
import { IconCalculator } from "@tabler/icons-react"

export default function Projects() {

  const projects: ProjectProps[] = [
    {
      repoLink: 'https://github.com/AlexandreContee/Calculadora-React',
      accessLink: 'https://alexandre-calculadora.vercel.app/',
      title: 'Calculator (React.Js)',
      image: <IconCalculator />,
    },
  ]

  function renderProjects() {
    return projects.map(p => (
      <Project
        key={p.repoLink}
        accessLink={p.accessLink}
        repoLink={p.repoLink}
        title={p.title}
        image={p.image}
      />
    ))
  }

  return (
    <div id="projects">
      <Area className="my-10">
        <h4 className="text-center text-2xl m-10">Hobby Projects</h4>
        <div className="flex gap-10 flex-wrap">
          {renderProjects()}
        </div>
      </Area>
    </div>
  )
}