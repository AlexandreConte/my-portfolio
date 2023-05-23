import Image from "next/image"
import Link from "next/link"

// Icons
import { IconArrowBadgeRightFilled } from '@tabler/icons-react'

type Project = {
  projectName: string
  projectLink: string
}

export interface CourseProps {
  courseTitle: string
  courseAreaOfStudy: string
  image: any
  imageAlt: string
  initialDate?: string
  finishDate?: string
  project?: Project[]
}

export default function Course(props: CourseProps) {
  return (
    <div className="py-14 min-w-full">
      <div className="ml-5">
        <div className="flex justify-center items-center flex-wrap pb-3 gap-2">
          <div className="flex items-center gap-2">
            <Image
              className="w-10"
              src={props.image}
              alt={props.imageAlt}
              width={80}
              height={80}
            />
            <h3 className="text-2xl font-medium">{props.courseTitle}</h3>
          </div>
          <hr className="flex-1 mx-4 border-zinc-600" />
          <h3 className="text-xl font-light text-zinc-400">{props.initialDate ?? null} {props.finishDate ? `to ${props.finishDate}` : "- Now"}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-normal">{props.courseAreaOfStudy}</h3>
          {props.project ? (
            props.project.map(p => (
              <div key={p.projectLink} className="flex flex-col">
                <Link
                  className="underline ml-2 mr-auto flex items-center"
                  target="_blank"
                  href={p.projectLink}>
                  <IconArrowBadgeRightFilled size={28} /> {p.projectName}
                </Link>
              </div>
            ))
          )
            : null}
        </div>
      </div>
    </div>
  )
}