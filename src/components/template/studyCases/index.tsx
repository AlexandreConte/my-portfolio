import Area from "@/components/shared/Area";
import Title from "@/components/shared/Title";

// Images
import portfolio from "/public/cases/portfolio.png"
import staart from "/public/cases/staart.png"

// Projects Data
import Case, { CaseProps } from "./Case";
const projects: CaseProps[] = [
  {
    name: "ProSchool",
    image: staart, alt: "Dispositivos mostrando a responsividade do web aplicativo desenvolvido.",
    description: "Projeto final de frontend aplicando os conhecimentos adquiridos no curso Staart, utilizado React para consumir uma API de dados da Staart. Só é possível navegar pela aplicação estando conectado com e-mail e senha, desenvolvidos com Firebase (autenticação) e Styled-Components para estilização. Na aplicação é possível navegar entre as jornadas de aprendizado e ao clicar em uma jornada o usuário é direcionado para os cursos da jornada, assim como ao clicar em um curso é direcionado para as aulas do curso."
  },
  {
    name: "Meu Portfolio",
    image: portfolio,
    alt: "Dispositivos mostrando a responsividade do web aplicativo desenvolvido.",
    description: "Meu portfolio pessoal. Desenvolvido com Next Js, TypeScript e TailwindCSS para estilização."
  },
]

export default function StudyCases() {
  return (
    <Area>
      <Title className="text-center mt-16 text-2xl">Principais Projetos</Title>
      {projects.map((project, index) => <Case key={`${project.name}${index}`} name={project.name} description={project.description} image={project.image} alt={project.alt} />)}
    </Area>
  )
}
