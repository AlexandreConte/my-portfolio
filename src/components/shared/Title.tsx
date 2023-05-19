interface TitleProps {
  children: string
  className?: string
}

export default function Title(props: TitleProps) {
  return (
    <h1 className={`
      text-3xl
      ${props.className}
    `}>{props.children}</h1>
  )
}