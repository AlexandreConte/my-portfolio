import Title from "./Title";
import profile from "../../../../public/me.png"
import Area from "@/components/shared/Area";
import Image from "next/image";

interface HelloProps {
  welcomeTitle: any
  presentation: any
  studying: any
}

export default function Hello(props: HelloProps) {
  return (
    <Area>
      <Title className="text-center p-7">{props.welcomeTitle}</Title>
      <div className="flex flex-row max-w-full flex-wrap-reverse items-center justify-center">
        <div className="pb-5 min-sm:pb-0">
          <Title className="text-lg text-center">{props.presentation}</Title>
          <Title className="text-lg text-center">{props.studying}</Title>
        </div>
        <Image src={profile} alt="profile" className={`w-auto`} />
      </div>
    </Area>
  )
}