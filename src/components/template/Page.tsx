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
        bg-gradient-to-r from-zinc-900 via-black to-zinc-900 ${props.className ?? ''}
    `}>
      {props.children}
    </div>
  )
}