import Image from "next/image"

export interface SocialItemProps {
  image: any
  alt: string
  link: string
}

export default function SocialItem(props: SocialItemProps) {
  return (
    <a href={props.link}>
      <Image
        width={40}
        alt={props.alt}
        src={props.image}
        className={`lg:w-12`}
      />
    </a>
  )
}