import Title from "../../../shared/Title";
import profile from "/public/me.png"
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
      <div className="flex items-center justify-center flex-wrap text-center">
        <Image src={profile} alt="profile" className={`w-auto`} />
        <div>
          <Title className="font-medium">{props.presentation}</Title>
          <Title className="font-medium">{props.studying}</Title>
        </div>
      </div>
    </Area>
  )
}