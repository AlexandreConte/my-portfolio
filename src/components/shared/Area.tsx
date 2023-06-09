interface AreaProps {
  children: any
  className?: string
}

export default function Area(props: AreaProps) {
  return (
    <div
      className={`
        flex justify-center
        ${props.className ?? ''}
      `}
    >
      <div
        className={`
          px-7 2xl:px-0
          w-full xl:w-[1280px]
        `}
      >
        {props.children}
      </div>
    </div>
  )
}