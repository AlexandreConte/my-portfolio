import Hello from "./hello";

export default function Intro() {

  return (
    <div
      className={`
        mt-[101px]
        bg-[url('/background/bg1.jpg')]
        bg-fixed
        bg-center
        bg-cover
      `}
    >
      <div className="bg-white/80">
        <Hello
          title1="Oi 👋🏼!"
          title2="Eu sou o Alexandre Conte"
          title3="React Developer"
          title4="Tenho 24 anos"
          title5="Sou desenvolvedor frontend com 2 anos de experiência com React"
        />
      </div>
    </div>
  )
}