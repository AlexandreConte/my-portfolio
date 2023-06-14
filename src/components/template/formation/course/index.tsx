import Image from "next/image";

export interface FormationCourseProps {
  image: any
  imageAlt: string
  courseTitle: string
  company: string
  initialDate: string
  finishDate: string
}

export default function FormationCourse(props: FormationCourseProps) {
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
            <h3 className="text-2xl font-medium">{props.company}</h3>
          </div>
          <hr className="flex-1 mx-4 border-black" />
          <h3 className="text-xl font-light text-zinc-800">{props.initialDate ?? null} {props.finishDate ? `a ${props.finishDate}` : "- Agora"}</h3>
        </div>
        <div>
          <h3 className="text-xl font-normal">{props.courseTitle}</h3>
        </div>
      </div>
    </div>
  )
}