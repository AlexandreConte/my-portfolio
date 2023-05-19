import Hello from "./hello";

export default function Intro() {

  return (
    <div
      className={`
        bg-[url('/background.jpg')]
        bg-fixed
      `}
    >
      <div className="bg-black/70">
        <Hello
          welcomeTitle="Hello!👋🏼"
          presentation="I'm Alexandre,"
          studying="Currently studying Systems Analysis and Development"
        />
      </div>
    </div>
  )
}