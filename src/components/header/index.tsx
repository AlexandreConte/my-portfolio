import Area from "../shared/Area"

interface HeaderProps {
  children: any
}

export default function Header(props: HeaderProps) {
  return (
    <Area
      className={`
        flex justify-center items-center
        bg-black p-7 
      `}
    >
      <div
        className="flex items-center justify-between"
      >
        {props.children}
      </div>
    </Area>
  )
}