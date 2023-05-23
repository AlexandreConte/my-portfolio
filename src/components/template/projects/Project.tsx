import { IconArrowBadgeRightFilled } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"

export interface ProjectProps {
  repoLink: string
  accessLink: string
  title: string
  image?: any
}

export default function Project(props: ProjectProps) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-1 m-10">
      {props.image ? (
        React.cloneElement(props.image, {
          size: 130
        })
      )
        : null}
      <div className="flex flex-col gap-2">
        <h4 className="text-xl">{props.title}</h4>
        <div className="flex flex-col">
          <Link href={props.repoLink} className="underline flex gap-1 items-center">
            <IconArrowBadgeRightFilled size={28} />
            Code Repository
          </Link>
          <Link href={props.repoLink} className="underline flex gap-1 items-center">
            <IconArrowBadgeRightFilled size={28} />
            Project Access
          </Link>
        </div>
      </div>
    </div>
  )
}