import Area from "@/components/shared/Area";
import FormationCourse, { FormationCourseProps } from "./course";

// Images
import ufsc from "/public/formation/ufsc.jpeg"

const formation: FormationCourseProps[] = [
  {
    company: 'Universidade Federal de Santa Catarina (UFSC)',
    courseTitle: 'Bacharelado em Sistemas de Informação',
    initialDate: 'Agosto/2021',
    finishDate: '',
    image: ufsc,
    imageAlt: 'Logo da Universidade Federal de Santa Catarina'
  }
]

export default function Graduation() {

  function renderFormation() {
    return formation.map((course, index) => (
      <FormationCourse
        key={`${course.courseTitle}${index}`}
        company={course.company}
        courseTitle={course.courseTitle}
        image={course.image}
        imageAlt={course.imageAlt}
        initialDate={course.initialDate}
        finishDate={course.finishDate}
      />
    ))
  }

  return (
    <Area>
      <div className="flex flex-col gap-12 my-10">
        <h3 className="text-center text-2xl">Graduação</h3>
        <div className="flex justify-center">
          <div className="border-l-2 border-black"></div>
          <div className="min-w-full">
            {renderFormation()}
          </div>
        </div>
      </div>
    </Area>
  )
}
