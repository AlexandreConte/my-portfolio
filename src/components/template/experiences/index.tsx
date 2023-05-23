import Area from "@/components/shared/Area";
import Experience, { ExperienceProps } from "./experience";

// IMAGES
import pixel from '/public/experiences/pixel.jpeg'

// Icons
import { IconChevronsUp } from '@tabler/icons-react'

const exps: ExperienceProps[] = [
  {
    companyTitle: "Pixel (UFSC)",
    companyDescription: "The Junior Company of Universidade Federal de Santa Catarina (Brazil)",
    activitiesDescription: "Training with JavaScript, React Native, Git and Github",
    initialDate: "Mar 22",
    finishDate: "Jun 22",
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
        <h3 className="text-center text-2xl">Experiences</h3>
        <div className="flex justify-center">
          <div className="border-l-2 border-zinc-50"></div>
          <div className="min-w-full">
            {renderAllExperiences()}
          </div>
        </div>
      </div>
    </Area>
  )
}