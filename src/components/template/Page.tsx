interface PageProps {
  children: any
  className?: string
}

export default function Page(props: PageProps) {
  return (
    <div
      className={`
        flex flex-col min-h-screen
        text-black 
        bg-gradient-to-r from-zinc-100 via-white to-zinc-100 ${props.className ?? ''}
        font-normal
    `}>
      {props.children}
    </div>
  )
}