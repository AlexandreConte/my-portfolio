import Image from "next/image"

export interface ProjectProps {
  repoLink: string
  accessLink: string
  title: string
  image?: any
}

export default function Project(props: ProjectProps) {
  return (
    <div className="flex flex-col items-center">
      <h4>{props.title}</h4>
      {props.image ? (
        <Image alt={props.title} src={props.image} />
      )
        : null}
    </div>
  )
}