import Area from "@/components/shared/Area"

interface FooterProps {
  children: any
}

export default function Footer(props: FooterProps) {
  return (
    <div id="contact-me">
      <Area
        className="bg-black"
      >
        <div
          className="flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-6 p-7 xl:px-0"
        >
          {props.children}
        </div>
      </Area>
    </div>
  )
}