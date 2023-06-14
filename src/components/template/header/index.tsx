import Area from "@/components/shared/Area"

interface HeaderProps {
  children: any
}

export default function Header(props: HeaderProps) {
  return (
    <Area
      className={`
        flex justify-center items-center
        bg-[#ffffffd0] py-7
        fixed min-w-full
        z-100 backdrop-blur-sm
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