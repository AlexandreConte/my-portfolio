import Area from "@/components/shared/Area";
import Experience, { ExperienceProps } from "./experience";

// IMAGES
import pixel from '/public/experiences/pixel.jpeg'

// Icons
import { IconChevronsUp } from '@tabler/icons-react'

const exps: ExperienceProps[] = [
  {
    companyTitle: "Pixel (UFSC)",
    companyDescription: "Empresa júnior da Universidade Federal de Santa Catarina.",
    activitiesDescription: "Treinamento de JavaScript, React Native, Git e Github.",
    initialDate: "Março/2022",
    finishDate: "Junho/2022",
    image: pixel,
    imageAlt: "Pixel Logo"
  }
]

function renderAllExperiences() {
  return exps.map((exp, index) => (
    index === 0 ? (
      <Experience
        key={`${exp.initialDate}-${exp.finishDate}`}
        companyTitle={exp.companyTitle}
        companyDescription={exp.companyDescription}
        activitiesDescription={exp.activitiesDescription}
        initialDate={exp.initialDate}
        finishDate={exp.finishDate}
        image={exp.image}
        imageAlt={exp.imageAlt}
      />
    )
      : (
        <div key={`${exp.initialDate}-${exp.finishDate}`}>
          <IconChevronsUp size={40} />
          <Experience
            companyTitle={exp.companyTitle}
            companyDescription={exp.companyDescription}
            activitiesDescription={exp.activitiesDescription}
            initialDate={exp.initialDate}
            finishDate={exp.finishDate}
            image={exp.image}
            imageAlt={exp.imageAlt}
          />
        </div>
      )
  ))
}

export default function Experiences() {
  return (
    <Area>
      <div className="flex flex-col gap-12 my-10 pt-4">
        <h3 className="text-center text-2xl">Experiências</h3>
        <div className="flex justify-center">
          <div className="border-l-2 border-black"></div>
          <div className="min-w-full">
            {renderAllExperiences()}
          </div>
        </div>
      </div>
    </Area>
  )
}