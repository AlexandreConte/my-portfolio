import Area from "@/components/shared/Area"
import Project, { ProjectProps } from "./Project"

// Icons
import {
  IconCalculator,
  IconListCheck,
  IconUserSearch,
  IconDoor
} from "@tabler/icons-react"

export default function Projects() {

  const projects: ProjectProps[] = [
    {
      repoLink: "https://github.com/AlexandreConte/Monty-hall",
      accessLink: 'https://monty-hall-alexandre-conte.vercel.app/',
      title: 'Next.Js Monty Hall',
      image: <IconDoor />
    },
    {
      repoLink: 'https://github.com/AlexandreConte/Calculadora-React',
      accessLink: 'https://alexandre-calculadora.vercel.app/',
      title: 'Calculator (React.Js)',
      image: <IconCalculator />,
    },
    {
      repoLink: 'https://github.com/AlexandreConte/Gerenciador-Tarefas',
      accessLink: 'https://task-manager-alexandre.vercel.app/',
      title: 'To Do App (React.Js)',
      image: <IconListCheck />
    },
    {
      repoLink: "https://github.com/AlexandreConte/GitFind",
      accessLink: 'http://git-find-jet.vercel.app/',
      title: 'React GitFind',
      image: <IconUserSearch />
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
        <h4 className="text-center text-2xl m-10">Projetos feitos para praticar</h4>
        <div className="flex gap-10 flex-wrap">
          {renderProjects()}
        </div>
      </Area>
    </div>
  )
}