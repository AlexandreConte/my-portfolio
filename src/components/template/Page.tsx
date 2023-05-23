interface PageProps {
  children: any
  className?: string
}

export default function Page(props: PageProps) {
  return (
    <div
      className={`
        flex flex-col min-h-screen
        text-zinc-50 
        bg-gradient-to-r from-zinc-800 via-black to-zinc-800 ${props.className ?? ''}
        font-normal
    `}>
      {props.children}
    </div>
  )
}