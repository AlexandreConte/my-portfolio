import Image from "next/image"

export interface SocialItemProps {
  image: any
  alt: string
}

export default function SocialItem(props: SocialItemProps) {
  return (
    <Image
      width={40}
      alt={props.alt}
      src={props.image}
      className={`lg:w-12`}
    />
  )
}