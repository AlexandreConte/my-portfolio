import Hello from "./hello";

export default function Intro() {

  return (
    <div
      className={`
        bg-[url('/background/bg1.jpg')]
        bg-fixed
        bg-center
        bg-cover
      `}
    >
      <div className="bg-black/70">
        <Hello
          welcomeTitle="Portfolio"
          presentation="Alexandre Conte"
          studying="Full Stack Developer"
        />
      </div>
    </div>
  )
}