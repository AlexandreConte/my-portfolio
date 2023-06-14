import Area from "@/components/shared/Area"
import Course, { CourseProps } from "./course"

// IMAGES
import cod3r from '/public/courses/cod3r.jpeg'
import onebitcode from '/public/courses/onebitcode.jpeg'
import staart from '/public/courses/staart.jpeg'
import meta from '/public/courses/meta.jpeg'

// Icons 
import {
  IconChevronsUp,
  IconRocket,
  IconCalculator,
  IconTicTac,
  IconSchool,
  IconSocial
} from '@tabler/icons-react'

const courses: CourseProps[] = [
  {
    courseTitle: 'Cod3r',
    courseAreaOfStudy: "Desenvolvimento web fullstack",
    image: cod3r,
    imageAlt: "Cod3r Logo",
    initialDate: "Maio/2023",
    finishDate: "",
  },
  {
    courseTitle: 'OneBitCode',
    courseAreaOfStudy: "Desenvolvimento fullstack",
    image: onebitcode,
    imageAlt: "OneBitCode Logo",
    initialDate: "Março/2023",
    finishDate: "",
    project: [
      {
        projectImage: <IconRocket />,
        projectName: "Space X",
        projectLink: "https://alexandre-spacex-project.netlify.app/",
        projectRepository: "https://github.com/AlexandreConte/spaceX",
      },
      {
        projectImage: <IconCalculator />,
        projectName: 'Calculadora JavaScript',
        projectLink: "https://alexandreconte.github.io/CalcJs/",
        projectRepository: 'https://github.com/AlexandreConte/CalcJs',

      },
      {
        projectImage: <IconTicTac />,
        projectName: 'Jogo da velha',
        projectLink: "https://alexandreconte.github.io/TicTacToe/",
        projectRepository: 'https://github.com/AlexandreConte/TicTacToe',
      },
    ]
  },
  {
    courseTitle: 'Meta',
    courseAreaOfStudy: "Front End Web Development",
    image: meta,
    imageAlt: 'Meta Logo',
    initialDate: 'Dezembro/2022',
    finishDate: 'Janeiro/2023',
  },
  {
    courseTitle: 'Staart',
    courseAreaOfStudy: "Desenvolvimento web full stack",
    image: staart,
    imageAlt: "Staart Logo",
    initialDate: "Maio/2022",
    finishDate: "Maio/2023",
    project: [
      {
        projectImage: <IconSchool />,
        projectName: "ProSchool",
        projectLink: "https://staart-front-end-project.vercel.app/",
        projectRepository: "https://github.com/AlexandreContee/Staart-front-end-project",
      },
      {
        projectImage: <IconSocial />,
        projectName: "Frontend de uma rede social",
        projectLink: "https://react-social-network-alexandre.vercel.app/",
        projectRepository: "https://github.com/AlexandreContee/react-social-network",
      },
    ],
  },
]

function renderAllCourses() {
  return courses.map((c, index) => (
    index === 0 ? (
      <Course
        key={`${c.courseTitle}-${c.courseAreaOfStudy}`}
        courseTitle={c.courseTitle}
        courseAreaOfStudy={c.courseAreaOfStudy}
        image={c.image}
        imageAlt={c.imageAlt}
        initialDate={c.initialDate}
        finishDate={c.finishDate}
        project={c.project}
      />
    ) : (
      <div key={`${c.courseTitle}-${c.courseAreaOfStudy}`} className="flex flex-col items-center">
        <IconChevronsUp size={40} />
        <Course
          courseTitle={c.courseTitle}
          courseAreaOfStudy={c.courseAreaOfStudy}
          image={c.image}
          imageAlt={c.imageAlt}
          initialDate={c.initialDate}
          finishDate={c.finishDate}
          project={c.project}
        />
      </div>
    )
  ))
}

export default function Courses() {
  return (
    <Area>
      <div className="flex flex-col gap-12 my-10">
        <h3 className="text-center text-2xl">Cursos</h3>
        <div className="flex justify-center">
          <div className="border-l-2 border-black"></div>
          <div className="min-w-full">
            {renderAllCourses()}
          </div>
        </div>
      </div>
    </Area>
  )
}