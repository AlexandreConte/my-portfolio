export interface NavbarItemProps {
  image?: any
  children: any
  className?: string
  link: string
  alwaysActive?: boolean
}

export default function NavbarItem(props: NavbarItemProps) {
  return (

    <a href={props.link} className={`flex items-center gap-1 border-b border-transparent hover:border-zinc-50 transition-colors text-lg ${props.className}`}>
      {
        props.image ? (
          props.image
        ) : null
      }
      {props.children}
    </a>
  )
}