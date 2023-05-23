import Area from "@/components/shared/Area"
import Course, { CourseProps } from "./course"

// IMAGES
import cod3r from '/public/courses/cod3r.jpeg'
import onebitcode from '/public/courses/onebitcode.jpeg'
import staart from '/public/courses/staart.jpeg'
import meta from '/public/courses/meta.jpeg'

// Icons 
import { IconChevronsUp } from '@tabler/icons-react'

const courses: CourseProps[] = [
  {
    courseTitle: 'Cod3r',
    courseAreaOfStudy: "Full Stack Web Development",
    image: cod3r,
    imageAlt: "Cod3r Logo",
    initialDate: "May 2023",
    finishDate: "",
  },
  {
    courseTitle: 'OneBitCode',
    courseAreaOfStudy: "Full Stack Development",
    image: onebitcode,
    imageAlt: "OneBitCode Logo",
    initialDate: "Mar 2023",
    finishDate: "",
  },
  {
    courseTitle: 'Meta',
    courseAreaOfStudy: "Front End Web Development",
    image: meta,
    imageAlt: 'Meta Logo',
    initialDate: 'Dec 2022',
    finishDate: 'Jan 2023',
  },
  {
    courseTitle: 'Staart',
    courseAreaOfStudy: "Full Stack Web Development",
    image: staart,
    imageAlt: "Staart Logo",
    initialDate: "May 2022",
    finishDate: "May 2023",
    project: [
      {
        projectLink: "https://github.com/AlexandreContee/Staart-front-end-project",
        projectName: "Front End Final Project"
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
        <h3 className="text-center text-2xl">Main Courses</h3>
        <div className="flex justify-center">
          <div className="border-l-2 border-zinc-50"></div>
          <div className="min-w-full">
            {renderAllCourses()}
          </div>
        </div>
      </div>
    </Area>
  )
}