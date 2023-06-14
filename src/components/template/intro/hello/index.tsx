import Title from "../../../shared/Title";
import Area from "@/components/shared/Area";
import Image from "next/image";

// Image
import profile from "/public/profile/ale.webp"

interface HelloProps {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
}

export default function Hello(props: HelloProps) {
  return (
    <Area>
      <div className="flex items-center justify-center flex-wrap">
        <div className="max-[889px]:py-16">
          <Title className="font-normal text-lg">{props.title1}</Title>
          <Title className="font-normal text-lg">{props.title2}</Title>
          <Title className="font-medium text-left">{props.title3}</Title>
          <Title className="text-lg font-normal">{props.title4}</Title>
          <Title className="text-lg font-normal">{props.title5}</Title>
        </div>
        <Image priority src={profile} alt="Alexandre Conte profile photo" className={`w-auto max-w-[320px]`} />
      </div>
    </Area>
  )
}