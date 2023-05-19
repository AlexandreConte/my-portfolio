import Area from "@/components/shared/Area"

interface HeaderProps {
  children: any
}

export default function Header(props: HeaderProps) {
  return (
    <Area
      className={`
        flex justify-center items-center
        bg-black py-7 lg:py-9
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