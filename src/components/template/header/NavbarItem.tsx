import Image from "next/image"

export interface NavbarItemProps {
  image?: any
  children: any
  className?: string
  link: string
}

export default function NavbarItem(props: NavbarItemProps) {
  return (
    <a href={props.link} className={`flex items-center gap-1 border-b border-transparent hover:border-zinc-50 transition-colors`}>
      {props.image ? (
        <Image
          alt={props.children}
          src={props.image}
          width={20}
          className="hidden sm:flex"
        />
      ) : null}
      {props.children}
    </a>
  )
}