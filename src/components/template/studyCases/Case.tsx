import Title from "@/components/shared/Title"
import Image from "next/image"

export interface CaseProps {
  name: string
  image: any
  alt?: string
  description: string
}

export default function Case(props: CaseProps) {
  return (
    <div>
      <Title className="text-center text-xl pt-14">{props.name}</Title>
      <div className="flex flex-col items-center">
        <Image src={props.image} className="w-auto" alt={props.alt ?? ""} />
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  )
}