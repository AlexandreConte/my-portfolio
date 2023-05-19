import Project, { ProjectProps } from "./Project"

export default function Projects() {

  const projects: ProjectProps[] = [
    {
      repoLink: 'https://github.com/AlexandreContee/CalcJs',
      accessLink: 'https://alexandrecontee.github.io/CalcJs/',
      title: 'Calculator'
    },
  ]

  function renderProjects() {
    return projects.map(p => <Project key={p.repoLink} accessLink={p.accessLink} repoLink={p.repoLink} title={p.title
    } image={p.image} />)
  }

  return (
    <div id="projects">
      {renderProjects()}
    </div>
  )
}