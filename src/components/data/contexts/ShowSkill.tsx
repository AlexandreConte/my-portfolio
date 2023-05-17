import Area from "@/components/shared/Area";
import { useContext, useEffect, useState } from "react";
import SkillContext from "./SkillContext";
import Image from "next/image";

export default function ShowSkill() {

  const { selectedSkill } = useContext(SkillContext)

  type DescriptionType = "A JavaScript library for building user interfaces." | "The React Framework for the Web." | "A CSS framework packed with classes that can be composed to build any design." | "A strongly typed programming language that builds on JavaScript."
  let description: DescriptionType

  switch (selectedSkill?.title) {
    case 'ReactJs':
      description = "A JavaScript library for building user interfaces."
      break;

    case 'NextJs':
      description = "The React Framework for the Web."
      break;

    case 'TailwindCSS':
      description = "A CSS framework packed with classes that can be composed to build any design."
      break;

    default:
      description = "A strongly typed programming language that builds on JavaScript."
      break;
  }

  const [state, setState] = useState<string>('')

  useEffect(() => {
    function write(delay: number) {
      if (description === null) return

      let currentIndex = 0
      const length = description.length
      const interval = setInterval(() => {
        if (currentIndex <= length) {
          setState(description.slice(0, currentIndex))
          currentIndex++
        }
        else {
          clearInterval(interval)
        }
      }, delay)

      return () => clearInterval(interval)
    }

    write(25)
  }, [description])

  return (
    <Area className="h-56">
      {selectedSkill?.title ? (
        <div className="text-2xl py-10 flex flex-col items-center gap-10 sm:flex-row">
          <Image
            src={selectedSkill.image}
            alt={selectedSkill.title}
            height={130}
          />
          <p>{state}</p>
        </div>
      ) : null}
    </Area>
  )
}